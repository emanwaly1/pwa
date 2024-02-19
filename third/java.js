const checkPermissions=()=>{
    if(!('serviceWorker' in navigator)){
        throw new Error('not supported this servicer')
    }
    if(!('Notification' in window)){
        throw new Error('Notifications stop work')
    }
}

const registerSer=async ()=>{
    const register=await navigator.serviceWorker.register('name.js');
    return register;
}

const requestPermision=async ()=>{
     const permision=await Notification.requestPermission();
     if(permision !== 'granted'){
         throw new Error('not allowed to enter')
     }else{
         new Notification('hi how are u')
     }
}

// const main= async()=>{
//     checkPermissions()
//     var registeration=await registerSer()
//     registeration.showNotification('hi from Service',{
//         icon:'../e.jpg',
//         image:"https://i.pinimg.com/236x/dd/97/fc/dd97fc89853f371a4723e4c2dcdbe7b8.jpg",
//         body: 'plalpalaskjaokofksodjfdfiojgdfiojgfiojgioj:)',
//     })
    
// }
// main()
checkPermissions()
registerSer()
// requestPermision()

