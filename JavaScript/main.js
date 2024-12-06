// to toggle dark mode
const dark = document.getElementById("dark");
const body = document.getElementById("body");

dark.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
});

const allBuyButton = document.querySelectorAll(".btn-primary");
const showItems = document.createElement("div");
const AllProducts = document.getElementById("allproducts");
const totalPrice = document.getElementById("totalPrice");
const counterBtn = document.getElementById("counter");
const blackscreen = document.getElementById("blackscreen");
// function for calc price
const updatTotalPrice = () => {
  const allCartProducts = document.querySelectorAll(".item-contaner");
  let total = 0;

  allCartProducts.forEach((item) => {
    const price = Number(
      item.getElementsByClassName("price")[0].innerText.replace("$", "")
    );
    const quantity = Number(
      item.getElementsByClassName("input-quantity")[0].value
    );
    total = total + price * quantity;
  });
  totalPrice.innerText = `${total} $`;
};

allBuyButton.forEach((item) => {
  item.addEventListener("click", (eo) => {
    // change buy button to done
    item.setAttribute("disabled", "");
    item.classList.remove("btn-primary");
    item.classList.add("btn-success");
    item.innerText = "Done";
    item.innerHTML = `&#10004 Done`;
    // item.classList.add("icon-check-circle")
    // item.style.position = "static"

    // for congratilations popup
    const popUp = document.createElement("div");
    body.append(popUp);
    popUp.classList.add("done-popup");
    popUp.innerHTML = `&#128525;  congratilations <br/>
 Thank you for your buisness
any thing else you're most welcome`;

    setTimeout(() => {
      popUp.style.transform = "translateX(-60vw)";
    }, 3000);
// this for remov popup from the element 
    setTimeout(() => {
      popUp.remove();
    }, 5000);
// for showing chopping cart
    body.append(showItems);
    showItems.classList.add("show-items");
    showItems.innerHTML = `<button style=" background-color: aqua; color: black; padding: 10px; border-radius: 5px; font-size: large;  width: 100px;">🛒
    <br/> Cart</button>
`;
// how to get html elemnet and put it in div shoping card withe changing data
    const card = item.parentElement.parentElement.parentElement;
    const imgSrc = card
      .getElementsByClassName("card-img-top")[0]
      .getAttribute("src");
    const itemName = card.getElementsByClassName("card-title")[0].innerText;
    const itemPrice = card.getElementsByClassName("price")[0].innerText;
// this is the new produc when i put it inr the cart 
    const addedProduct = `
  <div class="item-contaner">
                <div class="img-title-parent">
                    <img src="${imgSrc}" alt="">
                    <p  class="product-name";  >${itemName}</p>
                </div>

                <div style="display: flex; align-items: center;">
                    <input class="input-quantity" id="inputQuantity" min="1" type="number" value="1">
                    <p style = "color: black;">Quantity</p>
                </div>

                <div class="price">
                    ${itemPrice}
                </div>

                <div class="btn btn-secondary ">
                    delete
                </div>
            </div>
`;

    AllProducts.innerHTML += addedProduct;
    updatTotalPrice();
  });
});

const close = document.getElementById("close");
const blackScreen = document.getElementById("blackscreen");
// this for X icon to out from the tap when click on X
close.addEventListener("click", (eo) => {
  blackScreen.style.transform = "translateX(-110vw)";
});
// shoping cart show when click on buy  button for product
showItems.addEventListener("click", (eo) => {
  blackScreen.style.transform = "translateX(0)";
  //   setTimeout(() => {
  //     showItems.remove();
  //   }, 2000);
});

// counterBtn.addEventListener("click",(eo) => {
//     updatTotalPrice()
// })
// when click on delet product its' delet by yhode code 
blackScreen.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("btn-secondary")) {
    eo.target.parentElement.remove();
    updatTotalPrice();
// this for delet product frome the shoping cart
    const dleteProduct =
      eo.target.parentElement.getElementsByClassName("product-name")[0].innerText;
       
    const allcards = document.querySelectorAll(".card");
    allcards.forEach((item) => {
      const nameOfproductInGalary =
        item.getElementsByClassName("card-title")[0].innerText;
// make conferance if the product contains the sanme name remove it and change done btn
      if (dleteProduct == nameOfproductInGalary) {
        const DoneButton = item.getElementsByClassName("btn-success")[0];
        DoneButton.removeAttribute("disabled");
        DoneButton.classList.remove("btn-success");
        DoneButton.classList.add("btn-primary");
        DoneButton.innerText = "buy";
      }
    });
  }
});
// call back function when channge any value on product input inside the black screen shopping
blackScreen.addEventListener("change", (params) => {
  updatTotalPrice();
});
 

// // practic e on code
// const live = document.getElementById("love")
//  live.addEventListener("click",(eo) => {
//     live.classList.add("remove")
//     eo.target.getElementsByClassName("live")[0].value
//     eo.target.setAttribute("disabled" ,"disabled")
//     live.classList.contains("zozo")
//     const main = setTimeout(() => {
//     eo.target.style.backgroundColor = "red"
//    }, 3000);

//    setInterval , main (() => {
//     if (item === Array.length) {
//       item.classList.add("star")
//       item.classList.remove(nonody)
//     } else if(item >= i) {
//       item.addEventListener("change", (eo) => {
//         item.classList.add("adding")
//       })
//     } else{
//       item.style.backgroundColor ="white"
//     }
//   item.setAttribute("disabled" , "disabled")
//    }, 5000);
//  })

//  const myDiv = document.getElementById("mainhona")
//  let myPara = document.getElementsByClassName("sixty")
//  var myPage = document.querySelector("div")[0]

//  myDiv.addEventListener("click", (eo) => {
//   myPage.removeAttribute("disabled")
//  })

//  const cnonsept = document.getElementsByClassName("diserve")[0]
//  let kids = document.querySelector("#happines")
//  const ask = document.getElementById("dark")

//  let mainArray = [ "ahmed", "sidi", "fatima" , "zombie" , "zindagi","zeineb", "mariem", "mivida"]

//  mainArray.forEach((item, index) => {
// item.style.display = "flex"
// index.setAttribute("disabled", "disabled")
// item.addEventListener("click",(eo) => {
//   item.parentElement.parentElement.getElementsByClassName("hurican")[0]
//   const erthquaq = document.createElement("div")
//   body.document.write = erthquaq
// })
  
//  });





