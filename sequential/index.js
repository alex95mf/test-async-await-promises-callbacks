const { taskOne, taskTwo } = require('./tareas');

async function main(){
  try{
    console.time('Measuring time');    
    //Codigo sequencial:
    //console.log(`Task one: ${taskOne()}}`);
    //console.log(`Task two: ${taskTwo()}}`);
    
    //Codigo Paralelo:
    const results = await Promise.all([taskOne(), taskTwo()]);
    console.log(`Task one: ${results[0]}`);
    console.log(`Task two: ${results[1]}`);
    console.timeEnd('Measuring time');
  }
  catch(e){
    console.log(e);
  }
}

main();