
// function chechRooms(succes, failed){
//     setTimeout(function(){
//         console.log('Проверяем номера...');
//         const availableRooms = true;

//         if (availableRooms){
//             console.log('Номера есть!');
//             let message = 'Номера есть';
//             succes(message);
//         }else {
//             console.log('Номеров нет');
//             let message = 'Номеров нет';
//             failed(message);
//         }

//     },1000)
// }

// function cancelVacation(message){
//     console.log('Ответ (отмена) на предыдущем шаге:', message);
//     console.log('Отпуск отменяется ;c');
// }

// function submitVacation(message){
//     console.log('Ответ (прием) на предыдущем шаге:', message);
//     console.log('Едем в отпуск!');
// }


// function checkTichets(message, succes, failed){
//     setTimeout(function(){
//         console.log('---function checkTickets---');
//         console.log('Ответ на предыдущем шаге:', message);

//         console.log('Проверяем авиабилеты..');
//         const aviabiletTickets = true;

//         if(aviabiletTickets){
//             let message = 'Билеты есть';
//             succes(message);
//         }else {
//             let message = 'Билетов нет';
//             failed(message);
//         }

//     },500)
// }

// chechRooms
//     (function(messageCheckRooms){
//         checkTichets(
//                 messageCheckRooms,
//                 submitVacation,
//                 cancelVacation
//             )


//     }, 
//     cancelVacation
//     );





//                 //Мы создаем новое обещание
//                                     //Если успешно 
//                                                 //Если не успешно
// const myPromise = new Promise(function(resolve, reject){
//     console.log('Promise created')
//     setTimeout(function(){
//         const response = true;

//         if (response){
//             let message = 'SUCCESS';
//             resolve(message);

//         } else {
//             let message = 'FAILED';
//             reject(message);
//         }

//     },1000)
    
// });


// myPromise
// //resolve
//     .then(function(data){
//         console.log('Then');
//         console.log(data);

//  //reject
//     }).catch(function(data){
//         console.log('Catch');
//     }
//     )




chechRooms()
    .then(checkTichetsss)
    .then(suc)
    .catch(fail);


    function chechRooms(){
       return new Promise(function(resolve, reject){
            setTimeout(function(){
                console.log('Проверка номеров...');
                const availableRooms = true;
                
                if (availableRooms){
                    resolve('Номера есть');
                }else {
                    reject('Номеров нет');
                }
        
            }, 1500)
        });
    }

    function checkTichetsss(data){
        return new Promise(function(resolve, reject){
            setTimeout(()=>{
                console.log('---then1----');
                console.log('Проверяем авиабилеты...',data);
                const aviabiletTickets = true;

                if (aviabiletTickets){
                    let message = 'Билеты есть';
                    resolve(message);
                } else {
                    let message = 'Билетов нет';
                    reject(message);
                }

            },1000)
        })
    }

    function suc(message){
        console.log('---then2---');
        console.log('Ответ:',message);
        console.log('Едем в отпуск!')
    }

    function fail(message){
        console.log('---catch---');
        console.log('Ответ:',message);
        console.log('Отпуск отменяется')
    };



