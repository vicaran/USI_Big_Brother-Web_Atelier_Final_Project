var bridge = 'agora.mobile.usilu.net:9999'
var stunServer = 'stun:stun.l.google.com:19302'

var RTCPeerConnection     = wrtc.RTCPeerConnection;
var RTCSessionDescription = wrtc.RTCSessionDescription;
var RTCIceCandidate       = wrtc.RTCIceCandidate;

var pendingDataChannels = {};
var dataChannels = {};
var pendingCandidates = [];

var directConnection = function(cid, cid2, uid, direction, onopen, onmessage, onclose) {
  var dataChannelSettings = {};
  dataChannelSettings[cid + '_' + cid2 + '_' + direction] = {
    outOfOrderAllowed: false,
    maxRetransmitNum: 10
  } 

  function doHandleError(error)
  {
    throw error;
  }

  function doComplete()
  {
    console.log('complete');
  }

  function doWaitforDataChannels()
  {
    console.log('awaiting data channels');
  }

  var ws = null;
  var pc = new RTCPeerConnection(
    {
      iceServers: [{url:stunServer}]
    },
    {
      'optional': []
    }
  );
  pc.onsignalingstatechange = function(event)
  {
    console.info("signaling state change: ", event.target.signalingState);
  };
  pc.oniceconnectionstatechange = function(event)
  {
    console.info("ice connection state change: ", event.target.iceConnectionState);
  };
  pc.onicegatheringstatechange = function(event)
  {
    console.info("ice gathering state change: ", event.target.iceGatheringState);
  };
  pc.onicecandidate = function(event)
  {
    var candidate = event.candidate;
    if(!candidate) return;
    if(WebSocket.OPEN == ws.readyState)
    {
      ws.send(JSON.stringify(
        {'type': 'ice',
         'sdp': {'candidate': candidate.candidate, 'sdpMid': candidate.sdpMid, 'sdpMLineIndex': candidate.sdpMLineIndex}
        })
      );
    } else
    {
      pendingCandidates.push(candidate);
    }
  };

  doCreateDataChannels();

  function doCreateDataChannels()
  {
    var labels = Object.keys(dataChannelSettings);
    labels.forEach(function(label) {
      var channelOptions = dataChannelSettings[label];
      var channel = pendingDataChannels[label] = pc.createDataChannel(label, channelOptions);
      channel.binaryType = 'arraybuffer';

      connections[cid][uid][direction] = channel;
      // channel.onopen = function() {
      //   console.info('onopen');
      //   connections[cid][uid][direction] = channel;
      //   delete pendingDataChannels[label];
      //   if(Object.keys(dataChannels).length === labels.length) {
      //     doComplete();
      //   }
      // };
      channel.onopen = onopen;
      channel.onmessage = onmessage;
      channel.onclose = onclose;
      channel.onerror = doHandleError;
    });
    doCreateOffer();
  }

  function doCreateOffer()
  {
    pc.createOffer(
      doSetLocalDesc,
      doHandleError
    );
  }

  function doSetLocalDesc(desc)
  {
    pc.setLocalDescription(
      new RTCSessionDescription(desc),
      doSendOffer.bind(undefined, desc),
      doHandleError
    );
  }

  function doSendOffer(offer)
  {
    ws = new WebSocket("ws://" + bridge);
    ws.onopen = function()
    {
      pendingCandidates.forEach(function(candidate)
      {
        ws.send(JSON.stringify(
          {'type': 'ice',
           'sdp': {'candidate': candidate.candidate, 'sdpMid': candidate.sdpMid, 'sdpMLineIndex': candidate.sdpMLineIndex}
          })
        );
      });
      ws.send(JSON.stringify(
        {'type': offer.type, 'sdp': offer.sdp})
      );
    };
    ws.onmessage = function(event)
    {
      data = JSON.parse(event.data);
      if('answer' == data.type)
      {
        doSetRemoteDesc(data);
      } else if('ice' == data.type)
      {
        var candidate = new RTCIceCandidate(data.sdp.candidate);
        pc.addIceCandidate(candidate);
      }
    };
  }

  function doSetRemoteDesc(desc)
  {
    pc.setRemoteDescription(
      new RTCSessionDescription(desc),
      doWaitforDataChannels,
      doHandleError
    );
  }

}