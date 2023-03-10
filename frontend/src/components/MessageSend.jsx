import React from 'react';
import { FaPlusCircle,FaFileImage,FaGift,FaPaperPlane } from "react-icons/fa";

const MessageSend = ({inputHendle,newMessage,sendMessage,emojiSend,ImageSend}) => {
 
     const emojis = [      
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐คฃ",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐ฅฐ",
  "๐",
  "๐คฉ",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐คช",
  "๐",
  "๐ค",
  "๐ค",
  "๐คญ",
  "๐คซ",
  "๐ค",
  "๐ค",
  "๐คจ",
  "๐",
  "๐",
  "๐ถ",
  "๐",
  "๐",
  "๐",
  "๐ฌ",
  "๐คฅ",
  "๐",
  "๐",
  "๐ช",
  "๐คค",
  "๐ด",
  "๐ท",
  "๐ค",
  "๐ค",
  "๐คข",
  "๐คฎ",
  "๐คง",
  "๐ฅต",
  "๐ฅถ",
  "๐ฅด",
  "๐ต",
  "๐คฏ",
  "๐ค ",
  "๐ฅณ",
  "๐",
  "๐ค",
  "๐ง",
  "๐",
  "๐",
  "๐",
  "๐ฎ",
  "๐ฏ",
  "๐ฒ",
  "๐ณ",
  "๐ฅบ",
  "๐ฆ",
  "๐ง",
  "๐จ",
  "๐ฐ",
  "๐ฅ",
  "๐ข",
  "๐ญ",
  "๐ฑ",
  "๐",
  "๐ฃ",
  "๐",
  "๐",
  "๐ฉ",
  "๐ซ",
  "๐ฅฑ",
  "๐ค",
  "๐ก",
  "๐ ",
  "๐คฌ",
  "๐",
  "๐ฟ",
  "๐",
  "โ ๏ธ",
  "๐ฉ",
  "๐คก",
  "๐น",
  "๐บ",
  "๐ป",
  "๐ฝ",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "โฃ๏ธ",
  "๐",
  "โค๏ธ",
  "๐งก",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐ค",
  "๐ค",
  "๐ค",
  "๐ฏ",
  "๐",
  "๐ค",
  "๐๏ธ",
  "โ",
  "๐",
  "๐",
  "๐ค",
  "โ๏ธ",
  "๐ค",
  "๐ค",
  "๐ค",
  "๐ค",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "โ๏ธ",
  "๐",
  "๐",
  "โ",
  "๐",
  "๐ค",
  "๐ค",
  "๐",
  "๐",
  "๐",
  "๐คฒ",
  "๐ค",
  "๐",
  "๐ฎ",
  "๐ฎโโ๏ธ",
  "๐ฎโโ๏ธ",
  "๐ต๏ธ",
  "๐ฆ",
  "๐",
  "๐",
  "๐๏ธ",
  "๐๏ธ",
  "๐",
  "๐",
  "๐ฅ",
  "๐ฅ",
  "๐ฅ",
  "โฝ",
  "โพ",
  "๐ฅ",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐พ",
  "๐ฅ",
  "โ",
  "โ",
  "โ",
  "#๏ธโฃ",
  "๐ด",
  "๐ ",
  "๐ก",
  "๐ข",
  "๐ต",
  "๐ฃ",
  "๐ค",
  "โซ",
  "โช",
  "๐ฅ",
  "๐ง",
  "๐จ",
  "๐ฉ",
  "๐ฆ",
  "๐ช",
  "๐ซ",
  "โฌ",
  "โฌ",
  "๐ช๐น",
  "๐บ๐ฒ",
     ]


  return (

     <div className='message-send-section'>
          <input type="checkbox" id='emoji' />
             <div className='file hover-attachment'>
                  <div className='add-attachment'>
                         Add Attachment
                  </div>
                  <FaPlusCircle />
                  </div>  

          <div className='file hover-image'>
               <div className='add-image'>
                    Add Image 
               </div>
               <input onChange={ImageSend} type="file" id="pic" className='form-control' />
               <label htmlFor='pic'> <FaFileImage/> </label>
          </div>
          
          <div className='file hover-gift'>
               <div className='add-gift'>
                    Add gift
               </div>
               <FaGift />
          </div>

     <div className='message-type'>
          <input type="text" onChange={inputHendle} name='message' id='message' placeholder='Aa' className='form-control' value={newMessage}/>

          <div className='file hover-gift'>
               <label htmlFor='emoji'> โค </label>
          </div>
     </div>

     <div onClick={sendMessage} className='file'>
     <FaPaperPlane/>
     </div>

     <div className='emoji-section'>
          <div className='emoji'>
               {
                    emojis.map(e => <span onClick={()=>emojiSend(e)} >{e}</span>)
               }

          </div>

     </div>


     </div>

  )
};

export default MessageSend;
