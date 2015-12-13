__author__ = 'VeaVictis'


f = open('testhtml.txt', 'r')
newString = ''
for line in f:
  newString += "'"+line+"'+"

print(newString)