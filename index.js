let InputData = document.getElementById("search")
let BtnData = document.getElementById('inputBtn') 
let TextData = document.getElementById('textData')



// console.log(InputData);


    BtnData. addEventListener("click", () =>{
        // console.log("InputData.value");
        // InputData.value = ""
        const dataText = InputData.value
            TextData.innerHTML = `
            <h1 class="text-[white] pl-[50px] pt-[20px] text-[25px]">${dataText}</h1>
            `
            InputData.value =  ""
    })
