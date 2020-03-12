import re
def loadFileInput(filename): #return string array with all of lines in input.txt
    arrString = []
    fileInput = open(filename, 'r')
    for line in fileInput:
        arrString.append(line)
    fileInput.close()
    return arrString

def extractURL(str):
    start = 0
    end = 0
    if len(str) < 4:
        return ''
    for i in range(0,len(str) - 3):
        if str[i]=='h' and str[i+1] == 't' and str[i+2]=='t':
            start = i
        if str[i] == 'j' and str[i+1]=='p' and str[i+2]=='g':
            end = i+3
            return(str[start:end])
        elif str[i] == 'p' and str[i+1]=='n' and str[i+2]=='g':
            end = i+3
            return(str[start:end])
    return ''
import requests
def processFileInput(arrString):
    for line in arrString:
        if(re.findall('http',line)):
            x = extractURL(line)
            if (len(x)>1):
                url = x
                filename = url.split('/')[-1]
                r = requests.get(url, allow_redirects=True)
                if r.ok:
                    open(filename, 'wb').write(r.content)
                    print('Download Success: ',filename)
                    
arrString = loadFileInput('link.txt')
processFileInput(arrString)