__author__ = 'VeaVictis'


f = open('testhtml.txt', 'r')
result = open('result.txt','w')
newString = ''
for line in f:
  result.write("'"+line.strip()+"' + ")

