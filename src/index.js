import {PythonShell} from 'python-shell';

let options = {
  mode: 'text',
  pythonPath: 'C:/Users/slash/AppData/Local/Microsoft/WindowsApps/PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0/python.exe',
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: 'C:/Users/slash/Documents/GitHub/NodeToPython/scripts',
  args: ['gpt-4', "We can invoke Python through Node"]
};

PythonShell.run('countTokens.py', options).then(messages=>{
  // results is an array consisting of messages collected during execution
  console.log('results: %j', messages);
});