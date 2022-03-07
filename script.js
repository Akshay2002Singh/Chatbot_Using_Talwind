// left =  <div class="self-start">
//             <p class="pr-1 pl-2 m-1 mr-16 border inline-block  text-indigo-900 text-lg font-bold italic font-serif bg-purple-200 rounded-r-lg text-justify"
//               >Hi, I am Elite </p>
//           </div>
// right = <div class="self-end">
// <p class="pl-1 pr-2 m-1 ml-16 border inline-block text-indigo-900 text-lg font-bold italic font-serif bg-purple-200 rounded-l-lg text-justify"
//   >Hi</p>
// </div>

// option box = <div class="flex flex-col">
// <div class="self-end ">
//   <p class="px-3 cursor-puuuointer m-1 ml-16 border inline-block text-lg font-bold italic font-serif bg-black rounded-full text-justify "
//     onclick="get_element(event)">Hi</p>
// </div>
// <div class="self-end">
//   <p class="px-3 cursor-pointer m-1 ml-16 border inline-block text-lg font-bold italic font-serif bg-black rounded-full text-justify "
//     onclick="get_element(event)">How are you</p>
// </div>
// </div>
var bot_reply = { 
    'Hi': [["How may I help you "],["Find my profile","Find friends for me",
    "Change Password",'Other']],
    'Find friends for me' : [['Go to you suggestions','suggestion.xyz'],['Thanks',"Continue"]],
    "Find my profile": [["Navigate to link below","a.xyz"],['Thanks',"Continue"]], 
    'Thanks': [['Your welcome'],['Continue']], 
    'Continue': [["How may I help you"],["Find my profile","Find friends for me",
    "Change Password",'Other']],
    "Change Password": [["Navigate to link below","a.xyz"],['Thanks',"Continue"]], 
    'Other': [["Visit to Our Contact Us Page","contact.xyz"],['Thanks',"Continue"]] };

    var loder = `<div class="self-start ">
    <img class="w-20 my-1" src="./assets/output-onlinegiftools.gif" alt="text loding">
</div>`

function get_element(event) {
    var target = event.target || event.srcElement;
    var value = target.innerHTML;
    var children = document.getElementById('bot_chat_box').children;
    // console.log(children[0]);
    // console.log(children);
    var child_element_str = "";
    for (let i = 0; i < children.length - 1; i++) {
        child_element_str = child_element_str + children[i].outerHTML;
        // var temp = children[i].outerHTML;
        // console.log(temp);
    }
    // console.log(child_element_arr);

    child_element_str = child_element_str + `<div class="self-end">
    <p class="pl-1 pr-2 m-1 ml-16 border inline-block text-indigo-900 text-lg font-bold italic font-serif bg-purple-200 rounded-l-lg text-justify"
      >${value}</p>
    </div>`;
    // adding loder
    child_element_str = child_element_str+loder;
    document.getElementById('bot_chat_box').innerHTML = child_element_str;
    var div = document.getElementById('bot_chat_box');
    div.scrollTop = div.scrollHeight - div.clientHeight;
    
    // sleeping 

    children = document.getElementById('bot_chat_box').children;
    // console.log(children[0]);
    // console.log(children);
    child_element_str = "";
    for (let i = 0; i < children.length - 1; i++) {
        child_element_str = child_element_str + children[i].outerHTML;
        // var temp = children[i].outerHTML;
        // console.log(temp);
    }
    // console.log(child_element_arr);

    setTimeout(() => {
        var temp_reply_ques = bot_reply[value];
        child_element_str = child_element_str + `<div class="self-start">
        <p class="pr-1 pl-2 m-1 mr-16 border inline-block  text-indigo-900 text-lg font-bold italic font-serif bg-purple-200 rounded-r-lg text-justify"
          >${temp_reply_ques[0][0]}</p>
      </div>`;
    
      if(temp_reply_ques[0].length==2){
        child_element_str = child_element_str + `<div class="self-start">
        <p class="pr-1 pl-2 m-1 mr-16 border inline-block  text-indigo-900 text-lg font-bold italic font-serif bg-purple-200 rounded-r-lg text-justify"
          ><a href=${temp_reply_ques[0][1]}>${temp_reply_ques[0][1]}</a></p>
      </div>`;
      }
        var question = "";
        for (let i = 0; i < temp_reply_ques[1].length; i++) {
            question = question + `<div class="self-end ">
            <p class="px-3 cursor-pointer m-1 ml-16 border inline-block text-lg font-bold italic font-serif bg-black rounded-full text-justify "
              onclick="get_element(event)">${temp_reply_ques[1][i]}</p>
          </div>`;
        }
        child_element_str = child_element_str + `<div class="flex flex-col">
        ${question}
        </div>`;
    
        document.getElementById('bot_chat_box').innerHTML = child_element_str;
        var div = document.getElementById('bot_chat_box');
        div.scrollTop = div.scrollHeight - div.clientHeight;
        // console.log(child_element_arr)
    
        }, 500);

    
}


function toggle_chatbot(){
        document.getElementById('chatbot_icon').classList.toggle("hidden");
        document.getElementById('chatbot_box').classList.toggle("hidden");

}
