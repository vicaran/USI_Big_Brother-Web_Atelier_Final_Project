__author__ = 'VeaVictis'


f = open('../../public/js/scripts/index.html', 'r')
result = open('result.txt','w')
newString = ''
for line in f:
  result.write("'"+line.strip()+"' + ")

