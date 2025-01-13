//Item Lists
const items={
    king_Crests_Don_Juan_Tabaco_Honey_6mg:{quantity:4, reserved:"N"},
    kings_Crest_Don_Juan_Cafe_6mg:{quantity:4, reserved:"N"},
    kings_Crest_Don_Juan_Bombo_Aldonza_6mg:{quantity:12, reserved:"N"},
    //skwezed Start from here
    skwezed_Mango_Iced_6mg:{quantity:3, reserved:"N"},
    skwezed_Mango_Iced_3mg:{quantity:2, reserved:"N"},
    skwezed_Green_Apple_6mg:{quantity:2, reserved:"N"},
    skwezed_Mixed_Berries_3mg:{quantity:1, reserved:"N"},
    skwezed_Watermelon_Grape_3mg_Iced:{quantity:1, reserved:"N"},
    cream_Team_Butter_Cream_6mg:{quantity:4, reserved:"N"},
    //Daze (Fusion) Start from here
    daze_Fusion_Pineapple_Coconut_Banana_6mg_Iced:{quantity:1, reserved:"N"},
    daze_Fusion_Pineapple_Coconut_Banana_3mg_Iced:{quantity:1, reserved:"N"},
    daze_Fusion_Pineapple_Mango_Orange_6mg:{quantity:7, reserved:"N"},
    daze_Fusion_Pineapple_Mango_Orange_3mg:{quantity:1, reserved:"N"},
    daze_Fusion_Raspberry_Green_Apple_Watermelon_6mg:{quantity:2, reserved:"N"},
    daze_Fusion_Raspberry_Green_Apple_Watermelon_3mg:{quantity:1, reserved:"N"},
    daze_Fusion_Lemon_Passionfruit_Blueberry_3mg:{quantity:2, reserved:"N"},
    daze_Fusion_Lemon_Passionfruit_Blueberry_3mg_Iced:{quantity:1, reserved:"N"},
    daze_Fusion_Lemon_Passionfruit_Blueberry_6mg:{quantity:8, reserved:"N"},
    daze_Fusion_Banana_Cantaloupe_Honeydew_6mg_Iced:{quantity:2, reserved:"N"},
    daze_Fusion_Banana_Cantaloupe_Honeydew_3mg_Iced:{quantity:1, reserved:"N"},
    daze_Fusion_Orange_Yuzu_Tangerine_6mg:{quantity:1, reserved:"N"},
    //Daze (Reds) Start from here
    Reds_Apple_Grape_6mg:{quantity:8, reserved:"N"},
    Reds_Apple_Original_3mg_Iced:{quantity:1, reserved:"N"},
    Reds_Apple_Original_6mg_Iced:{quantity:1, reserved:"N"},
    Reds_Apple_Original_6mg:{quantity:4, reserved:"N"},
    Reds_Apple_Original_3mg:{quantity:1, reserved:"N"},
    Reds_Apple_Berries_6mg_Iced:{quantity:1, reserved:"N"},
    Reds_Apple_Berries_3mg_Iced:{quantity:1, reserved:"N"},
    Reds_Apple_Berries_6mg:{quantity:5, reserved:"N"},
    Reds_Apple_Berries_3mg:{quantity:1, reserved:"N"},
    Reds_Apple_Gold_Kiwi_6mg:{quantity:7, reserved:"N"},
    Reds_Apple_Gold_Kiwi_3mg:{quantity:1, reserved:"N"},
    }

    //Check items Sold out or not
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
    let date="13/01/2025";
    let time="11:30 AM";
    document.getElementById("date").innerHTML=date;
    document.getElementById("time").innerHTML=time;