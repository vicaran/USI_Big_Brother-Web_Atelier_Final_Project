__author__ = 'VeaVictis'


f = open('../../public/index.html', 'r')
result = open('result.txt','w')
newString = ''
for line in f:
  result.write("'"+line.strip()+"' + ")

