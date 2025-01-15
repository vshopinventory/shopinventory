//Item Lists
const items={
    kc_tabaco_dulce_35mg:{quantity:19, reserved:"N"},
    kc_tabaco_dulce_50mg:{quantity:5, reserved:"N"},
    kc_bombo_aldonza_50mg:{quantity:15, reserved:"N"},
    kc_bombo_aldonza_35mg:{quantity:12, reserved:"N"},
    kc_churro_35mg:{quantity:1, reserved:"N"},
    kc_don_juan_cafe_35mg :{quantity:0, reserved:"N"},
    kc_grape_ice_50mg :{quantity:1, reserved:"N"},
    kc_mango_berry_iced_35mg:{quantity:2, reserved:"N"},
    kc_strawberry_peach_iced_35mg:{quantity:3, reserved:"N"},
    kc_strawberry_peach_iced_50mg:{quantity:1, reserved:"N"},
    kc_watermelon_lemonade_iced_35mg:{quantity:5, reserved:"N"},
    kc_watermelon_lemonade_iced_50mg:{quantity:1, reserved:"N"},
    //skwezed Start from here
    skwezed_green_apple_25mg:{quantity:1, reserved:"N"},
    skwezed_green_apple_25mg_iced:{quantity:5, reserved:"N"},
    skwezed_green_apple_50mg_iced:{quantity:3, reserved:"N"},
    skwezed_watermelon_25mg:{quantity:4, reserved:"N"},
    skwezed_watermelon_25mg_iced:{quantity:2, reserved:"N"},
    skwezed_mango_25mg:{quantity:7, reserved:"N"},
    skwezed_mango_25mg_iced:{quantity:1, reserved:"N"},
    skwezed_mango_50mg_iced:{quantity:1, reserved:"N"},
    skwezed_watermelon_green_apple_25mg:{quantity:3, reserved:"N"},
    skwezed_watermelon_green_apple_25mg_iced:{quantity:2, reserved:"N"},
    skwezed_watermelon_green_apple_50mg_iced:{quantity:2, reserved:"N"},
    skwezed_watermelon_strawberry_25mg:{quantity:4, reserved:"N"},
    skwezed_watermelon_strawberry_25mg_iced:{quantity:4, reserved:"N"},
    skwezed_watermelon_strawberry_50mg_iced:{quantity:1, reserved:"N"},
    skwezed_mixed_berry_25mg:{quantity:1, reserved:"N"},
    skwezed_strawberry_25mg:{quantity:3, reserved:"N"},
    skwezed_watermelon_50mg:{quantity:1, reserved:"N"},
    skwezed_watermelon_white_grapev25mg_iced:{quantity:1, reserved:"N"},
    skwezed_banana_50mg:{quantity:1, reserved:"N"},
    skwezed_banana_25mg_iced:{quantity:1, reserved:"N"},
    skwezed_pink_lemonade_25mg_iced:{quantity:1, reserved:"N"},
    //Pacha Start from here
    pacha_apple_tobacco_25mg:{quantity:	4, reserved:"N"},
    pacha_fuji_50mg:{quantity:1, reserved:"N"},
    pacha_fuji_25mg:{quantity:2, reserved:"N"},
    pacha_fuji_25mg_iced:{quantity:2, reserved:"N"},
    //Pod Juice Start from here
    pod_Juice_Jewel_Tobacco_35mg:{quantity:4, reserved:"N"},
    pod_Juice_Virginia_Tobacco_55mg:{quantity:3, reserved:"N"},
    pod_Juice_Peach_Berry_35mg:{quantity:1, reserved:"N"},
    pod_Juice_Watermelon_Bubblegum_35mg:{quantity:0, reserved:"N"},
    pod_Juice_Bangin_Blue_Razz_55mg:{quantity:1, reserved:"N"},
    pod_Juice_Fruity_Bears_35mg:{quantity:1, reserved:"N"},
    pod_Juice_Graham_Cracker_35mg:{quantity:1, reserved:"N"},
    pod_Juice_Jewel_Mint_35mg:{quantity:1, reserved:"N"},
    //Daze (Reds) Start from here
    reds_Apple_Berries_30mg:{quantity:3, reserved:"N"},
    reds_Apple_Berries_30mg_iced:{quantity:4, reserved:"N"},
    reds_Apple_Berries_50mg_iced:{quantity:1, reserved:"N"},
    reds_Apple_Gold_Kiwi_30mg_Iced:{quantity:7, reserved:"N"},
    reds_Apple_Gold_Kiwi_30mg:{quantity:6, reserved:"N"},
    redsvApple_Grape_30mg:{quantity:2, reserved:"N"},
    reds_Apple_Grape_30mg_Iced:{quantity:2, reserved:"N"},
    reds_Apple_Grape_50mg:{quantity:1, reserved:"N"},
    reds_Apple_Original_30mg:{quantity:5, reserved:"N"},
    reds_Apple_Original_50mg:{quantity:2, reserved:"N"},
    reds_Apple_Original_30mg_iced:{quantity:2, reserved:"N"},
    //Daze (Fusion) Start from here
    daze_Lemon_Passionfruit_Blueberry_30mg:{quantity:2, reserved:"N"},
    daze_Lemon_Passionfruit_Blueberry_30mg_Iced:{quantity:2, reserved:"N"},
    daze_Raspberry_Green_Apple_Watermelon_30mg:{quantity:1, reserved:"N"},
    daze_Raspberry_Green_Apple_Watermelon_30mg_Iced:{quantity:1, reserved:"N"},
    daze_Banana_Cantaloup_Honeydew_30mg_Iced:{quantity:2, reserved:"N"},
    daze_Banana_Cantaloup_Honeydew_50mg_Iced:{quantity:1, reserved:"N"},
    daze_Pineapple_Coconut_Banana_Iced_30mg:{quantity:2, reserved:"N"},
    daze_Pineapple_Mango_Orange_30mg_Iced:{quantity:1, reserved:"N"},
    }

    //Chech items sold out or not
    Object.keys(items).forEach((key)=>{
        const quantity=items[key].quantity;
        const element=document.getElementById(key);

        if(quantity===0){
            element.innerHTML="Sold Out";
            element.style.color="#ff0000";
        }else{
            element.innerHTML=quantity;
        }
    });

    
    //Total Quantity 
    let sum=0;
    Object.values(items).forEach(function (item){
        sum+=item.quantity;
    });
    
    document.getElementById('sum').innerHTML=sum;

    //Update Status
    let date="16/01/2025";
    let time="12:26 PM";
    let updatedProducts=`<strong>Last updated Product(s):</strong>
Pod Juice Juwel Tobacco`;
    document.getElementById("date").innerHTML=date;
    document.getElementById("time").innerHTML=time;
    document.getElementById('updatedProducts').innerHTML=updatedProducts;
    
    //updated products show for some seconds
    document.addEventListener("DOMContentLoaded", function(){
        let container=document.getElementById('updatedProductsContainer');
        setInterval(()=>{
            container.style.display="block";
            container.classList.remove("hide");
            container.classList.add("show");
            //container.style.display="block";
            
            setTimeout(()=>{
            container.classList.remove("show");
            container.classList.add("hide");
            //container.style.display="none";
            },4000);
        }, 30000);
        
    });
