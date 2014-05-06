function processMessage(message) {
   var newMesAray = [];
   var messageArray = message.split(' ');

   for (var i =0, len = messageArray.length;i < len; i++){
      if(messageArray[i] !== '') {
         var newMessage = '(?=.*' + messageArray[i] + ')';
               newMesAray.push(newMessage);
               }
      }

   var messageJoin = newMesAray.join('');

   var mongoMessage = new RegExp(messageJoin,  'i');

   return mongoMessage;
   }
exports.processMessage = processMessage; 
