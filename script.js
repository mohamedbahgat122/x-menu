/**
 * Cafe Menu Application
 * Electronic Menu for "أكس" Cafe & Restaurant
 * Features: Dynamic rendering, category/sub-category filtering, search, smooth animations
 */

// ========================================
// Sample Menu Data with Sub-categories
// ========================================
const menuItems = [
    // Food Items - طعام - with sub-categories
    {
        id: 1,
        name: "شاورما فراخ سوري",
          description: " ",
        price: "100 ج.م",
        image: "./image/1.1.png",
        category: "food",
        subCategory: "shwarma"
    },
    
   {
        id: 2,
        name: "شاورما فراخ  رول  ",
           description: " ",
        price: "110 ج.م",
        image: "./image/1.2.png",
        category: "food",
        subCategory: "shwarma"
    },


    {
        id: 3,
        name: "شاورما سوري جولداً ",
           description: " ",
        price: "125 ج.م",
        image: "./image/1.3.png",
        category: "food",
        subCategory: "shwarma"
    },

    {
        id: 4,
        name: "شاورما فراخ  موتزريلا ",
          description: " ",
        price: "120 ج.م",
        image: "./image/1.4.png",
        category: "food",
        subCategory: "shwarma"
    },


    {
        id: 5,
        name: "شاورما  صاروخ ",
           description: " ",
        price: "150 ج.م",
        image: "./image/1.5.png",
        category: "food",
        subCategory: "shwarma"
    },

        // فته شورما 
   
    {
        id: 6,
        name: "فتة شاورما فراخ وسط",
        description: "فتة مع شاورما دجاج يقدم معها ارز بسمتي   - بطاطس - عيش محمص - شرائح شورما - تومية -خبز  -مخلل",
        price: "110 ج.م",
        image: "./image/2.1.jpg",
        category: "food",
        subCategory: "fatta"
    },

    {
        id: 7,
        name: "فتة شاورما فراخ كبير",
        description: "فتة مع شاورما دجاج يقدم معها ارز بسمتي   - بطاطس - عيش محمص - شرائح شورما - تومية -خبز  -مخلل",
        price: "140 ج.م",
        image: "./image/2.2.jpg",
        category: "food",
        subCategory: "fatta"
    },
      {
        id: 7,
        name: "فتة شاورما مكسيكي وسط",
        description: " ",
           price: "140 ج.م",
        image: "./image/6.png",
        category: "food",
        subCategory: "fatta"
    },
     {
        id: 7,
        name: "فتة شاورما مكسيكي كبير",
         description: " ",
           price: "140 ج.م",
        image: "./image/6.png",
        category: "food",
        subCategory: "fatta"
    },

    //وجبات الشورما 


    {
        id: 8,
        name: "وجبة شاورما عربي سنجل ",
        description: "4 قطع - بطاطس - تومية - مخلل  ",
        price: "125 ج.م",
        image: "./image/7.png",
        category: "food",
        subCategory: "meals"
    },


   {
        id: 9,
        name: "وجبة شاورما عربي اكسترا ",
        description: "6 قطع - بطاطس - تومية - مخلل  ",
        price: "170 ج.م",
        image: "./image/7.png",
        category: "food",
        subCategory: "meals"
    },

   {
        id: 10,
        name: "وجبة شاورما عربي دبل ",
        description: "8 قطع - بطاطس - تومية - مخلل  ",
        price: "200 ج.م",
        image: "./image/7.png",
        category: "food",
        subCategory: "meals"
    },
    
   
    //بطاطس
    
    {
        id: 11,
        name: "سندوتش بطاطس سوري ",
        description: "    ",
        price: "35 ج.م",
        image: "./image/10.png",
        category: "food",
        subCategory: "potato"
    },
    

    {
        id: 12,
        name: "سندوتش بطاطس سوري موتزريلا ",
        description: "  ",
        price: "45 ج.م",
        image: "./image/3.1.jpg",
        category: "food",
        subCategory: "potato"
    },

    {
        id: 13,
        name: "سندوتش بطاطس شورما سوري ",
        description: "  ",
        price: "70 ج.م",
        image: "./image/3.2.png",
        category: "food",
        subCategory: "potato"
    },


   {
        id: 14,
        name: "سندوتش بطاطس موتزريلا ماك",
        description: "    ",
        price: "45 ج.م",
        image: "./image/11.png",
        category: "food",
        subCategory: "potato"
    },


   {
        id: 15,
        name: "سندوتش بطاطس كرسبي سوري ",
        description: " ",
        price: "75 ج.م",
        image: "./image/3.3.jpg",
        category: "food",
        subCategory: "potato"
    },

    {
        id: 16,
        name: "سندوتش بطاطس مكسيكي ",
        description: "  ",
        price: "45 ج.م",
        image: "./image/3.4.png",
        category: "food",
        subCategory: "potato"
    },


    {
        id: 17,
        name: "سندوتش بطاطس جولدن اكس",
        description: "بطاطس مقلية مع بهارات اكس خاصة",
        price: "50 ج.م",
        image: "./image/10.png",
        category: "food",
        subCategory: "potato"
    },

   


   {
        id: 17,
        name: "باكت  بطاطس   ",
        description: "بطاطس مقلية مع بهارات اكس خاصة باكت ",
        price: "30 ج.م",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
        category: "food",
        subCategory: "potato"
    },



        // الغربي 


   {
        id: 18,
        name: "  سندوتش  تشيكن كرسبي وسط",
        description: " ",
        price: "95 ج.م",
        image: "./image/4.1.png",
        category: "food",
        subCategory: "western"
    },

    {
        id: 19,
        name: "  سندوتش  تشيكن كرسبي كبير",
        description: " ",
        price: "130 ج.م",
        image: "./image/12.png",
        category: "food",
        subCategory: "western"
    },




    {
        id: 21,
        name: "  سندوتش  تشيكن استربس وسط",
        description: " ",
        price: "95 ج.م",
        image: "./image/4.2.png",
        category: "food",
        subCategory: "western"
    },


  

    {
        id: 22,
        name: "  سندوتش  تشيكن استربس كبير",
        description: " ",
        price: "130 ج.م",
        image: "./image/4.3.jpg",
        category: "food",
        subCategory: "western"
    },




   {
        id: 21,
        name: "  سندوتش  زنجر اكس الحار  وسط",
        description: " ",
        price: "100 ج.م",
        image: "./image/4.4.png",
        category: "food",
        subCategory: "western"
    },


  

    {
        id: 22,
        name: "  سندوتش  زنجر اكس الحار  كبير",
        description: " ",
        price: "140 ج.م",
        image: "./image/4.5.png",
        category: "food",
        subCategory: "western"
    },


   {
        id: 21,
        name: "  سندوتش  تشيكن اكس المدخن وسط",
        description: " ",
        price: "110 ج.م",
        image: "./image/4.6.png",
        category: "food",
        subCategory: "western"
    },


  

    {
        id: 22,
        name: "  سندوتش  تشيكن اكس المخن كبير",
        description: " ",
        price: "150 ج.م",
        image: "./image/4.7.jpg",
        category: "food",
        subCategory: "western"
    },




 {
        id: 21,
        name: "  سندوتش  تشيكن اكس موتزريلا وسط",
        description: " ",
        price: "110 ج.م",
        image: "./image/4.8.jpg",
        category: "food",
        subCategory: "western"
    },


  

    {
        id: 22,
        name: "  سندوتش  تشيكن اكس موتزريلا كبير",
        description: " ",
        price: "150 ج.م",
        image: "./image/4.9.png",
        category: "food",
        subCategory: "western"
    },



    


   {
        id: 21,
        name: "  سندوتش  تشيكن جولدن اكس  وسط",
        description: " ",
        price: "110 ج.م",
        image: "./image/4.10.png",
        category: "food",
        subCategory: "western"
    },


  

    {
        id: 22,
        name: "  سندوتش  تشيكن جولدن اكس كبير",
        description: " ",
        price: "150 ج.م",
        image: "./image/4.11.png",
        category: "food",
        subCategory: "western"
    },


   {
        id: 20,
        name: "  طبق  نانو كرسبي ",
        description: " ",
        price: "50 ج.م",
        image: "./image/4.12.png",
        category: "food",
        subCategory: "western"
    },


 
    

    // مشويات 



    {
        id: 12,
        name: "  ربع فرخه مشوية ورك",
        description: " ",
        price: "110 ج.م",
        image: "./image/5.1.jpg",
        category: "food",
        subCategory: "grills"
    },

   {
        id: 12,
        name: " ربع  فرخة مشوية صدر",
        description: " ",
        price: "130 ج.م",
        image: "./image/5.2.png",
        category: "food",
        subCategory: "grills"
    },

    {
        id: 12,
        name: "  نص فرخه مشوية ",
        description: " ",
        price: "185 ج.م",
        image: "./image/15.png",
        category: "food",
        subCategory: "grills"
    },

    {
        id: 12,
        name: "  فرخه مشوية ",
        description: " ",
        price: "350 ج.م",
        image: "./image/5.3.png",
        category: "food",
        subCategory: "grills"
    },

       {
        id: 12,
        name: "  فروجة مشوية ",
        description: " ",
        price: "250 ج.م",
        image: "./image/5.4.png",
        category: "food",
        subCategory: "grills"
    },

     {
        id: 12,
        name: "  نص فروجه مشوية ",
        description: "",
        price: "150 ج.م",
        image: "./image/5.5.jpg",
        category: "food",
        subCategory: "grills"
    },

     {
        id: 12,
        name: "    وجبة شيش طاووق  ",
        description: "  2 عود شيش طاوق ",
        price: "150 ج.م",
        image: "./image/5.6.png",
        category: "food",
        subCategory: "grills"
    },
    
    /// family

    // {
    //     id: 14,
    //     name: " صنية اكس 3 افراد",
    //     description: "فروجة مشوية على الفحم  -  سندوتش شاورما  -  3 قطع بروست3 قطع شيش طاوق  - لتر بيبسي  -  ارز - خبز  -بطاطس  - تومية ",
    //     price: "600 ج.م",
    //     image: "./image/22.png",
    //     category: "food",
    //     subCategory: "family"
    // },

    // {
    //     id: 14,
    //     name: " صنية اكس 3 افراد",
    //     description: " فروجة ونصف مشوية على الفحم  -   2 سندوتش شاورما  -  5 قطع بروست 5 قطع شيش طاوق   -   لتر بيبسي  -   ارز  -   خبز  -   بطاطس  -   تومية  ",
    //     price: "1000 ج.م",
    //     image: "./image/22.png",
    //     category: "food",
    //     subCategory: "family"
    // },
   
    // البروست


    {
        id: 16,
        name: "    4 قطع كرسبي ",
        description: "دجاج مقلي مقرمش مع صوصات متنوعة  يقدم حار او بارد مع ريزو",
        price: "135 ج.م",
        image: "./image/6.1.jpg",
        category: "food",
        subCategory: "fried_chicken"
    },

    {
        id: 16,
          name: "    8 قطع كرسبي ",
        description: "دجاج مقلي مقرمش مع صوصات متنوعة  يقدم حار او بارد مع ريزو",
        price: "250 ج.م",
        image: "./image/6.1.jpg",
        category: "food",
        subCategory: "fried_chicken"
    },

   {
        id: 16,
        name: "    12 قطع كرسبي ",
        description: "دجاج مقلي مقرمش مع صوصات متنوعة  يقدم حار او بارد مع ريزو",
        price: "490 ج.م",
        image: "./image/6.1.jpg",
        category: "food",
        subCategory: "fried_chicken"
    },
   




        //ريزو

   {
        id: 18,
        name: "ريزو  كلاسيك وسط ",
        description: "",
        price: "95 ج.م",
        image: "./image/23.png",
        category: "food",
        subCategory: "rizo"
    },

     {
        id: 18,
        name: "ريزو  كلاسيك كبير  ",
        description: "",
        price: "130 ج.م",
        image: "./image/23.png",
        category: "food",
        subCategory: "rizo"
    },
     {
        id: 18,
        name: "ريزو  زنجر وسط ",
        description: "",
        price: "95 ج.م",
        image: "./image/23.png",
        category: "food",
        subCategory: "rizo"
    }, {
        id: 18,
        name: "ريزو  زنجر كبير ",
        description: "",
        price: "130 ج.م",
        image: "./image/23.png",
        category: "food",
        subCategory: "rizo"
    }, {
        id: 18,
        name: "ريزو  باربكيو وسط ",
        description: "",
        price: "100 ج.م",
        image: "./image/23.png",
        category: "food",
        subCategory: "rizo"
    }, {
        id: 18,
        name: "ريزو  باربكيو كبير ",
        description: "",
        price: "135 ج.م",
        image: "./image/23.png",
        category: "food",
        subCategory: "rizo"
    }, {
        id: 18,
        name: "ريزو  جولدن اكس وسط ",
        description: "",
        price: "110 ج.م",
        image: "./image/23.png",
        category: "food",
        subCategory: "rizo"
    }, {
        id: 18,
        name: "ريزو  جولدن اكس كبير ",
        description: "",
        price: "150 ج.م",
        image: "./image/23.png",
        category: "food",
        subCategory: "rizo"
    }, 
   

    // الاضففات

    {
        id: 18,
        name: "سلطة  تومية  ",
        description: "",
        price: "10 ج.م",
        image: "./image/7.1.jpg",
        category: "food",
        subCategory: "addons"
    },

    {
        id: 18,
        name: "سلطة  كولسلو  ",
        description: "",
        price: "15 ج.م",
        image: "./image/7.2.png",
        category: "food",
        subCategory: "addons"
    },

     {
        id: 18,
        name: "خبز  باتي بان  ",
        description: "",
        price: "10 ج.م",
        image: "./image/7.3.jpg",
        category: "food",
        subCategory: "addons"
    },

     {
        id: 18,
        name: "  طبق ارز  ",
        description: "",
        price: "30 ج.م",
        image: "./image/7.4.jpg",
        category: "food",
        subCategory: "addons"
    },

      {
        id: 18,
        name: "  صوص جبنه شيدر  ",
        description: "",
        price: "15 ج.م",
        image: "./image/7.5.png",
        category: "food",
        subCategory: "addons"
    },

      {
        id: 18,
        name: "  صوصات    ",
        description: "",
        price: "10 ج.م",
        image: "./image/7.6.png",
        category: "food",
        subCategory: "addons"
    },

    




    

    // Drinks Items - مشروبات - with sub-categories
    {
        id: 20,
        name: "قهوة تركي سنجل",
        description: " ",
        price: "30 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },

    {
        id: 20,
        name: "قهوة تركي دبل",
        description: " ",
        price: "40 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },

     {
        id: 20,
        name: "شاي  ",
        description: " ",
        price: "20 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },

     {
        id: 20,
        name: "اسبرسوسنجل   ",
        description: " ",
        price: "40 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },

     {
        id: 20,
        name: "اسبرسو دبل   ",
        description: " ",
        price: "50 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },

     {
        id: 20,
        name: "قهوة فرنساوي   ",
        description: " ",
        price: "45 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },
    {
        id: 20,
        name: "قهوة بندق   ",
        description: " ",
        price: "45 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },

     {
        id: 20,
        name: "قهوة بندق   ",
        description: " ",
        price: "45 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },
    {
        id: 20,
        name: "قهوة نوتيلا    ",
        description: " ",
        price: "55 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },


     {
        id: 20,
        name: " نسكافية    ",
        description: " ",
        price: "55 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },


    {
        id: 20,
        name: " كراميل ميكاتو    ",
        description: " ",
        price: "60 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },


    {
        id: 20,
        name: " كورتادو     ",
        description: " ",
        price: "60 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },

    {
        id: 20,
        name: "  امريكانو كوفي    ",
        description: " ",
        price: "65 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },

    {
        id: 20,
        name: "  موكا    ",
        description: " ",
        price: "60 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },

    {
        id: 20,
        name: "  وايت موكا     ",
        description: " ",
        price: "60 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },

    {
        id: 20,
        name: "  ميكاتو    ",
        description: " ",
        price: "60 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },

    {
        id: 20,
        name: " فلات  وايت    ",
        description: " ",
        price: "60 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },

    {
        id: 20,
        name: "  كابتشينو    ",
        description: " ",
        price: "60 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },

    {
        id: 20,
        name: "  لاتية    ",
        description: " ",
        price: "60 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-coffee"
    },

   


  /// cold coffee
    {
        id: 21,
        name: "ايس امريكانو ",
        description: "",
        price: "60 ج.م",
        image: "",
        category: "drinks",
        subCategory: "cold-coffee"
    },

     {
        id: 21,
        name: " ايس لاتيه ",
        description: "",
        price: "85 ج.م",
        image: "",
        category: "drinks",
        subCategory: "cold-coffee"
    },


     {
        id: 21,
        name: "ايس وايت موكا  ",
        description: "",
        price: "85 ج.م",
        image: "",
        category: "drinks",
        subCategory: "cold-coffee"
    },
     {
        id: 21,
        name: "ايس كراميل ميكاتو  ",
        description: "",
        price: "100 ج.م",
        image: "",
        category: "drinks",
        subCategory: "cold-coffee"
    },
     {
        id: 21,
        name: "ايس سبانيش لاتيه  ",
        description: "",
        price: "100 ج.م",
        image: "",
        category: "drinks",
        subCategory: "cold-coffee"
    },
     {
        id: 21,
        name: "ايس ماتشا فراولة  ",
        description: "",
        price: "100 ج.م",
        image: "",
        category: "drinks",
        subCategory: "cold-coffee"
    },
     {
        id: 21,
        name: " ايس وايت فراولة لاتيه ",
        description: "",
        price: "110 ج.م",
        image: "",
        category: "drinks",
        subCategory: "cold-coffee"
    },
     {
        id: 21,
        name: "ميلك كوفي   ",
        description: "",
        price: "50 ج.م",
        image: "",
        category: "drinks",
        subCategory: "cold-coffee"
    },

    // hot drink
   
    {
        id: 23,
        name: "شاي  حليب",
        description: "",
        price: "35 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-drink"
    },

     {
        id: 23,
        name: "قرفه  حليب",
        description: "",
        price: "40 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-drink"
    },
     {
        id: 23,
        name: "  كوكتيل اعشاب",
        description: "",
        price: "35 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-drink"
    },
     {
        id: 23,
        name: "  هوت شوكليت",
        description: "",
        price: "55 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-drink"
    },
     {
        id: 23,
        name: "هوت  سيدر",
        description: "",
        price: "50 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-drink"
    },
     {
        id: 23,
        name: "هوت  اوريو",
        description: "",
        price: "50 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-drink"
    },
     {
        id: 23,
        name: "سحلب  فواكه",
        description: "",
        price: "65 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-drink"
    },
     {
        id: 23,
        name: "  سحلب",
        description: "",
        price: "55 ج.م",
        image: "",
        category: "drinks",
        subCategory: "hot-drink"
    },



        // عصير

    {
        id: 24,
        name: "عصير  مانجو",
        description: "",
        price: "60 ج.م",
        image: "",
        category: "drinks",
        subCategory: "juice"
    },

    {
        id: 24,
        name: "عصير  فرولة",
        description: "",
        price: "60 ج.م",
        image: "",
        category: "drinks",
        subCategory: "juice"
    },

    {
        id: 24,
        name: "عصير  جوافة",
        description: "",
        price: "60 ج.م",
        image: "",
        category: "drinks",
        subCategory: "juice"
    },
    {
        id: 24,
        name: "عصير  كيوي",
        description: "",
        price: "75 ج.م",
        image: "",
        category: "drinks",
        subCategory: "juice"
    },
    {
        id: 24,
        name: "عصير  افوكادو",
        description: "",
        price: "100 ج.م",
        image: "",
        category: "drinks",
        subCategory: "juice"
    },
    {
        id: 24,
        name: "عصير  ليمون",
        description: "",
        price: "50 ج.م",
        image: "",
        category: "drinks",
        subCategory: "juice"
    },
    {
        id: 24,
        name: "عصير  ليمون نعناع",
        description: "",
        price: "55 ج.م",
        image: "",
        category: "drinks",
        subCategory: "juice"
    },
    {
        id: 24,
        name: "عصير  ليمون فرنساوي",
        description: "",
        price: "60 ج.م",
        image: "",
        category: "drinks",
        subCategory: "juice"
    },
    {
        id: 24,
        name: "عصير  موز حليب",
        description: "",
        price: "70 ج.م",
        image: "",
        category: "drinks",
        subCategory: "juice"
    },
    {
        id: 24,
        name: "عصير  بطيخ",
        description: "",
        price: "60 ج.م",
        image: "",
        category: "drinks",
        subCategory: "juice"
    },
    {
        id: 24,
        name: "عصير  عناب",
        description: "",
        price: "35 ج.م",
        image: "",
        category: "drinks",
        subCategory: "juice"
    },
    {
        id: 24,
        name: "عصير  بلح حليب",
        description: "",
        price: "70 ج.م",
        image: "",
        category: "drinks",
        subCategory: "juice"
    },





    //شيشه



    {
        id: 25,
        name: " حجر معسل ",
        description: " ",
        price: "20 ج.م",
        image: "",
        category: "drinks",
        subCategory: "smoking"
    },

     {
        id: 25,
        name: " حجر اسكندراني ",
        description: " ",
        price: "40 ج.م",
        image: "",
        category: "drinks",
        subCategory: "smoking"
    },

     {
        id: 25,
        name: " حجر فواكه ",
        description: " ",
        price: "80 ج.م",
        image: "",
        category: "drinks",
        subCategory: "smoking"
    },

     {
        id: 25,
        name: " حجر فواكه  مكس",
        description: " ",
        price: "100 ج.م",
        image: "",
        category: "drinks",
        subCategory: "smoking"
    },


        //فربتشينو 


    {
        id: 26,
        name: "فرابتشينو كراميل",
        description: "  ",
        price: "100 ج.م",
        image: "",
        category: "drinks",
        subCategory: "frappuccino"
    },
     {
        id: 26,
        name: "فرابتشينو موكا",
        description: "  ",
        price: "100 ج.م",
        image: "",
        category: "drinks",
        subCategory: "frappuccino"
    },
     {
        id: 26,
        name: "فرابتشينو كلاسيك",
        description: "  ",
        price: "100 ج.م",
        image: "",
        category: "drinks",
        subCategory: "frappuccino"
    },
     {
        id: 26,
        name: "فرابتشينو نوتيلا",
        description: "  ",
        price: "110 ج.م",
        image: "",
        category: "drinks",
        subCategory: "frappuccino"
    },
     {
        id: 26,
        name: "فرابتشينو بندق",
        description: "  ",
        price: "100 ج.م",
        image: "",
        category: "drinks",
        subCategory: "frappuccino"
    },
     {
        id: 26,
        name: "فرابتشينو لوتس",
        description: "  ",
        price: "110 ج.م",
        image: "",
        category: "drinks",
        subCategory: "frappuccino"
    },


        // ميلك شيك 
    {
        id: 27,
        name: "ميلك شيك فراولة",
        description: "",
        price: "75 ج.م",
        image: "",
        category: "drinks",
        subCategory: "milk-shake"
    },

     {
        id: 27,
        name: "ميلك شيك فانيليا",
        description: "",
        price: "75 ج.م",
        image: "",
        category: "drinks",
        subCategory: "milk-shake"
    },
     {
        id: 27,
        name: "ميلك شيك اوريو",
        description: "",
        price: "75 ج.م",
        image: "",
        category: "drinks",
        subCategory: "milk-shake"
    },
     {
        id: 27,
        name: "ميلك شيك شوكولاته",
        description: "",
        price: "75 ج.م",
        image: "",
        category: "drinks",
        subCategory: "milk-shake"
    },
     {
        id: 27,
        name: "ميلك شيك لوتس",
        description: "",
        price: "75 ج.م",
        image: "",
        category: "drinks",
        subCategory: "milk-shake"
    },
     {
        id: 27,
        name: "ميلك شيك كراميل",
        description: "",
        price: "75 ج.م",
        image: "",
        category: "drinks",
        subCategory: "milk-shake"
    },
     {
        id: 27,
        name: "ميلك شيك كيت كات",
        description: "",
        price: "90 ج.م",
        image: "",
        category: "drinks",
        subCategory: "milk-shake"
    },
     {
        id: 27,
        name: "ميلك شيك بيستاشيو",
        description: "",
        price: "80 ج.م",
        image: "",
        category: "drinks",
        subCategory: "milk-shake"
    },
     {
        id: 27,
        name: "ميلك شيك نوتيلا",
        description: "",
        price: "75 ج.م",
        image: "",
        category: "drinks",
        subCategory: "milk-shake"
    },
     {
        id: 27,
        name: "ميلك شيك سنيكرز",
        description: "",
        price: "75 ج.م",
        image: "",
        category: "drinks",
        subCategory: "milk-shake"
    },
     {
        id: 27,
        name: "ميلك شيك بلوبيري",
        description: "",
        price: "75 ج.م",
        image: "",
        category: "drinks",
        subCategory: "milk-shake"
    },
     {
        id: 27,
        name: "ميلك شيك مانجو",
        description: "",
        price: "75 ج.م",
        image: "",
        category: "drinks",
        subCategory: "milk-shake"
    },
     {
        id: 27,
        name: "ميلك شيك بلو لاجون",
        description: "",
        price: "75 ج.م",
        image: "",
        category: "drinks",
        subCategory: "milk-shake"
    },
     {
        id: 27,
        name: "ميلك شيك جوز هند",
        description: "",
        price: "75 ج.م",
        image: "",
        category: "drinks",
        subCategory: "milk-shake"
    },


    


    //سموزي

    {
        id: 28,
        name: "سموذي  مانجو",
        description: " ",
        price: "65 ج.م",
        image: "",
        category: "drinks",
        subCategory: "smoothie"
    },


    {
        id: 28,
        name: "سموذي  فراولة",
        description: " ",
        price: "65 ج.م",
        image: "",
        category: "drinks",
        subCategory: "smoothie"
    },

    {
        id: 28,
        name: "سموذي  ليمون نعناع",
        description: " ",
        price: "65 ج.م",
        image: "",
        category: "drinks",
        subCategory: "smoothie"
    },
     {
        id: 28,
        name: "سموذي  بلوبيري",
        description: " ",
        price: "65 ج.م",
        image: "",
        category: "drinks",
        subCategory: "smoothie"
    },
     {
        id: 28,
        name: "سموذي  خوخ",
        description: " ",
        price: "65 ج.م",
        image: "",
        category: "drinks",
        subCategory: "smoothie"
    },
     {
        id: 28,
        name: "سموذي  مانجو كيوي",
        description: " ",
        price: "65 ج.م",
        image: "",
        category: "drinks",
        subCategory: "smoothie"
    },
     {
        id: 28,
        name: "سموذي  ميكس بيري",
        description: " ",
        price: "65 ج.م",
        image: "",
        category: "drinks",
        subCategory: "smoothie"
    },
     {
        id: 28,
        name: "سموذي  بينا كولادا",
        description: " ",
        price: "65 ج.م",
        image: "",
        category: "drinks",
        subCategory: "smoothie"
    },
     {
        id: 28,
        name: "سموذي  باشون فروت",
        description: " ",
        price: "65 ج.م",
        image: "",
        category: "drinks",
        subCategory: "smoothie"
    },
    // Soft Drinks
    {
        id: 29,
        name: "بيبسي",
        description: " ",
        price: "35 ج.م",
        image: "",
        category: "drinks",
        subCategory: "soft_drinks"
    },
    
    {
        id: 31,
        name: "سفن آب",
        description: " ",
        price: "35 ج.م",
        image: "",
        category: "drinks",
        subCategory: "soft_drinks"
    },

    {
        id: 31,
        name: "ريد بول",
        description: " ",
        price: "85 ج.م",
        image: "",
        category: "drinks",
        subCategory: "soft_drinks"
    },
    
    {
        id: 31,
        name: " تويست",
        description: " ",
        price: "35 ج.م",
        image: "",
        category: "drinks",
        subCategory: "soft_drinks"
    },

    {
        id: 31,
        name: " ديو",
        description: " ",
        price: "35 ج.م",
        image: "",
        category: "drinks",
        subCategory: "soft_drinks"
    },

     {
        id: 31,
        name: " موهيتو",
        description: " ",
        price: "45 ج.م",
        image: "",
        category: "drinks",
        subCategory: "soft_drinks"
    },
     {
        id: 31,
        name: " فيروز",
        description: " ",
        price: "35 ج.م",
        image: "",
        category: "drinks",
        subCategory: "soft_drinks"
    },

     {
        id: 31,
        name: " بريل",
        description: " ",
        price: "40 ج.م",
        image: "",
        category: "drinks",
        subCategory: "soft_drinks"
    },

     {
        id: 31,
        name: " ستينج",
        description: " ",
        price: "35 ج.م",
        image: "",
        category: "drinks",
        subCategory: "soft_drinks"
    },

     {
        id: 31,
        name: " شويبس",
        description: " ",
        price: "35 ج.م",
        image: "",
        category: "drinks",
        subCategory: "soft_drinks"
    },

     {
        id: 31,
        name: " شيري كولا",
        description: " ",
        price: "50 ج.م",
        image: "",
        category: "drinks",
        subCategory: "soft_drinks"
    },


    {
        id: 32,
        name: "مياه معدنية",
        description: " ",
        price: "10 ج.م",
        image: "",
        category: "drinks",
        subCategory: "soft_drinks"
    },
];

// ========================================
// DOM Elements
// ========================================
const menuContainer = document.getElementById('menuContainer');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

// Food sub-category elements
const subcategoryBar = document.getElementById('subcategoryBar');
const subcategoryScroll = document.getElementById('subcategoryScroll');
const foodSubcategoryButtons = document.querySelectorAll('.subcategory-btn[data-category="food"]');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

// Drinks sub-category elements
const drinksSubcategoryBar = document.getElementById('drinksSubcategoryBar');
const drinksSubcategoryScroll = document.getElementById('drinksSubcategoryScroll');
const drinksSubcategoryButtons = document.querySelectorAll('.subcategory-btn[data-category="drinks"]');
const drinksScrollLeftBtn = document.getElementById('drinksScrollLeft');
const drinksScrollRightBtn = document.getElementById('drinksScrollRight');

// Surprise Me Modal elements
const surpriseMeBtn = document.getElementById('surpriseMeBtn');
const surpriseModal = document.getElementById('surpriseModal');
const modalClose = document.getElementById('modalClose');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');

// Theme Toggle elements
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// ========================================
// State Management
// ========================================
let currentCategory = 'food';
let currentFoodSubCategory = 'all';
let currentDrinksSubCategory = 'all';
let currentSearchTerm = '';

// ========================================
// Core Functions
// ========================================

/**
 * Creates HTML markup for a single menu item card
 * @param {Object} item - Menu item object
 * @returns {string} HTML string for the menu item
 */
function createMenuItemHTML(item) {
    const categoryLabel = item.category === 'food' ? 'طعام' : 'مشروبات';
    const categoryEmoji = item.category === 'food' ? '🍽️' : '☕';

    // Conditionally render image only if it exists and is not empty
    const hasImage = item.image && item.image.trim() !== '';
    const imageHTML = hasImage
        ? `<img src="${item.image}" alt="${item.name}" class="menu-item-image" loading="lazy">`
        : '';

    // Add class to card when no image for layout adjustments
    const cardClass = hasImage ? 'menu-item' : 'menu-item no-image';

    return `
        <article class="${cardClass}" data-category="${item.category}">
            ${imageHTML}
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <span class="menu-item-category">${categoryEmoji} ${categoryLabel}</span>
            </div>
        </article>
    `;
}

/**
 * Creates HTML for empty state when no items match filter
 * @returns {string} HTML string for empty state
 */
function createEmptyStateHTML() {
    return `
        <div class="empty-state">
            <div class="empty-state-icon">🍽️</div>
            <p class="empty-state-text">لا توجد عناصر متاحة في هذا القسم</p>
        </div>
    `;
}

/**
 * Renders menu items to the container
 * @param {Array} items - Array of menu item objects to render
 */
function renderMenuItems(items) {
    // Clear current content
    menuContainer.innerHTML = '';

    // Handle empty state
    if (items.length === 0) {
        menuContainer.innerHTML = createEmptyStateHTML();
        return;
    }

    // Generate and insert HTML for all items
    const itemsHTML = items
        .map((item, index) => {
            const html = createMenuItemHTML(item);
            const delay = Math.min(index * 60, 600);
            return html.replace(
                '<article ',
                `<article style="--stagger-delay: ${delay}ms;" `
            );
        })
        .join('');
    menuContainer.innerHTML = itemsHTML;
}

/**
 * Filters menu items by category, sub-category and search term
 * @param {string} category - Category to filter by ('all', 'food', 'drinks')
 * @param {string} searchTerm - Search term to filter by name/description
 * @returns {Array} Filtered array of menu items
 */
function filterItems(category, searchTerm) {
    let filtered = menuItems;

    // Filter by category
    if (category !== 'all') {
        filtered = filtered.filter(item => item.category === category);
    }

    // Filter by sub-category based on current category
    if (category === 'food' && currentFoodSubCategory !== 'all') {
        filtered = filtered.filter(item => item.subCategory === currentFoodSubCategory);
    } else if (category === 'drinks' && currentDrinksSubCategory !== 'all') {
        filtered = filtered.filter(item => item.subCategory === currentDrinksSubCategory);
    }

    // Filter by search term (if provided)
    if (searchTerm && searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase().trim();
        filtered = filtered.filter(item =>
            item.name.toLowerCase().includes(term) ||
            item.description.toLowerCase().includes(term)
        );
    }

    return filtered;
}

/**
 * Applies current filters and re-renders the menu
 */
function applyFiltersAndRender() {
    const filteredItems = filterItems(currentCategory, currentSearchTerm);
    renderMenuItems(filteredItems);
}

/**
 * Updates visibility of sub-category bars based on current category
 */
function updateSubcategoryBarVisibility() {
    // Hide both bars first
    subcategoryBar.classList.remove('visible');
    drinksSubcategoryBar.classList.remove('visible');

    if (currentCategory === 'food') {
        subcategoryBar.classList.add('visible');
        // Reset drinks sub-category
        currentDrinksSubCategory = 'all';
        updateActiveSubcategoryButton(document.querySelector('.subcategory-btn[data-category="drinks"][data-subcategory="all"]'), drinksSubcategoryButtons);
        // Update arrow states after bar becomes visible
        setTimeout(() => updateFoodScrollArrows(), 100);
    } else if (currentCategory === 'drinks') {
        drinksSubcategoryBar.classList.add('visible');
        // Reset food sub-category
        currentFoodSubCategory = 'all';
        updateActiveSubcategoryButton(document.querySelector('.subcategory-btn[data-category="food"][data-subcategory="all"]'), foodSubcategoryButtons);
        // Update arrow states after bar becomes visible
        setTimeout(() => updateDrinksScrollArrows(), 100);
    } else {
        // 'all' selected - reset both sub-categories
        currentFoodSubCategory = 'all';
        currentDrinksSubCategory = 'all';
        updateActiveSubcategoryButton(document.querySelector('.subcategory-btn[data-category="food"][data-subcategory="all"]'), foodSubcategoryButtons);
        updateActiveSubcategoryButton(document.querySelector('.subcategory-btn[data-category="drinks"][data-subcategory="all"]'), drinksSubcategoryButtons);
    }
}

/**
 * Updates active state of filter buttons
 * @param {HTMLElement} activeButton - The button to set as active
 */
function updateActiveButton(activeButton) {
    filterButtons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}

/**
 * Updates active state of sub-category buttons
 * @param {HTMLElement} activeButton - The button to set as active
 * @param {NodeList} buttonsCollection - The collection of buttons to update
 */
function updateActiveSubcategoryButton(activeButton, buttonsCollection) {
    buttonsCollection.forEach(button => {
        button.classList.remove('active');
    });
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

/**
 * Handles search input events
 * @param {Event} event - Input event
 */
function handleSearchInput(event) {
    currentSearchTerm = event.target.value;
    applyFiltersAndRender();
}

/**
 * Handles sub-category button click events
 * @param {Event} event - Click event
 */
function handleSubcategoryClick(event) {
    const button = event.currentTarget;
    const category = button.dataset.category;
    const subCategory = button.dataset.subcategory;

    // Update appropriate sub-category state
    if (category === 'food') {
        currentFoodSubCategory = subCategory;
        updateActiveSubcategoryButton(button, foodSubcategoryButtons);
    } else if (category === 'drinks') {
        currentDrinksSubCategory = subCategory;
        updateActiveSubcategoryButton(button, drinksSubcategoryButtons);
    }

    // Apply combined filters and render
    applyFiltersAndRender();
}

/**
 * Handles filter button click events
 * @param {Event} event - Click event
 */
function handleFilterClick(event) {
    const button = event.currentTarget;
    currentCategory = button.dataset.category;

    // Update button states
    updateActiveButton(button);

    // Update sub-category bar visibility
    updateSubcategoryBarVisibility();

    // Apply combined filters and render
    applyFiltersAndRender();
}

/**
 * Updates scroll arrow visibility for food sub-category bar (RTL context)
 * In RTL: scrollLeft=0 is the start (right edge), scrollLeft becomes negative towards the end
 */
function updateFoodScrollArrows() {
    if (!subcategoryScroll) return;

    const scrollLeft = subcategoryScroll.scrollLeft;
    const scrollWidth = subcategoryScroll.scrollWidth;
    const clientWidth = subcategoryScroll.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    // Get the wrapper element for fade effects
    const wrapper = subcategoryScroll.parentElement;

    // Right arrow: hide when at the very beginning (scrollLeft close to 0)
    // In RTL, the start is the right edge where scrollLeft = 0
    if (scrollLeft >= -10 && scrollLeft <= 10) {
        scrollRightBtn.classList.add('disabled');
        if (wrapper) {
            wrapper.classList.add('no-fade-right');
            wrapper.classList.remove('has-fade-right');
        }
    } else {
        scrollRightBtn.classList.remove('disabled');
        if (wrapper) {
            wrapper.classList.add('has-fade-right');
            wrapper.classList.remove('no-fade-right');
        }
    }

    // Left arrow: hide when at the end (scrollLeft at -maxScroll or less)
    // In RTL, the end is the left edge where scrollLeft = -maxScroll
    if (scrollLeft <= -maxScroll + 10 || maxScroll <= 0) {
        scrollLeftBtn.classList.add('disabled');
        if (wrapper) {
            wrapper.classList.add('no-fade-left');
            wrapper.classList.remove('has-fade-left');
        }
    } else {
        scrollLeftBtn.classList.remove('disabled');
        if (wrapper) {
            wrapper.classList.add('has-fade-left');
            wrapper.classList.remove('no-fade-left');
        }
    }
}

/**
 * Updates scroll arrow visibility for drinks sub-category bar (RTL context)
 * In RTL: scrollLeft=0 is the start (right edge), scrollLeft becomes negative towards the end
 */
function updateDrinksScrollArrows() {
    if (!drinksSubcategoryScroll) return;

    const scrollLeft = drinksSubcategoryScroll.scrollLeft;
    const scrollWidth = drinksSubcategoryScroll.scrollWidth;
    const clientWidth = drinksSubcategoryScroll.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    // Get the wrapper element for fade effects
    const wrapper = drinksSubcategoryScroll.parentElement;

    // Right arrow: hide when at the very beginning (scrollLeft close to 0)
    // In RTL, the start is the right edge where scrollLeft = 0
    if (scrollLeft >= -10 && scrollLeft <= 10) {
        drinksScrollRightBtn.classList.add('disabled');
        if (wrapper) {
            wrapper.classList.add('no-fade-right');
            wrapper.classList.remove('has-fade-right');
        }
    } else {
        drinksScrollRightBtn.classList.remove('disabled');
        if (wrapper) {
            wrapper.classList.add('has-fade-right');
            wrapper.classList.remove('no-fade-right');
        }
    }

    // Left arrow: hide when at the end (scrollLeft at -maxScroll or less)
    // In RTL, the end is the left edge where scrollLeft = -maxScroll
    if (scrollLeft <= -maxScroll + 10 || maxScroll <= 0) {
        drinksScrollLeftBtn.classList.add('disabled');
        if (wrapper) {
            wrapper.classList.add('no-fade-left');
            wrapper.classList.remove('has-fade-left');
        }
    } else {
        drinksScrollLeftBtn.classList.remove('disabled');
        if (wrapper) {
            wrapper.classList.add('has-fade-left');
            wrapper.classList.remove('no-fade-left');
        }
    }
}

/**
 * Scrolls the food subcategory container left (toward end) by 200px (RTL)
 * In RTL: negative scrollBy moves toward the left edge (end of content)
 */
function foodScrollLeftHandler() {
    if (!subcategoryScroll) return;
    subcategoryScroll.scrollBy({ left: -200, behavior: 'smooth' });
}

/**
 * Scrolls the food subcategory container towards the right (back to start)
 * In RTL: scrolling right means going back towards scrollLeft 0
 */
function foodScrollRightHandler() {
    if (!subcategoryScroll) return;
    subcategoryScroll.scrollBy({ left: 200, behavior: 'smooth' });
}

/**
 * Scrolls the drinks subcategory container towards the left (to see hidden items)
 * In RTL: scrolling left means negative scrollLeft values
 */
function drinksScrollLeftHandler() {
    if (!drinksSubcategoryScroll) return;
    drinksSubcategoryScroll.scrollBy({ left: -200, behavior: 'smooth' });
}

/**
 * Scrolls the drinks subcategory container towards the right (back to start)
 * In RTL: scrolling right means going back towards scrollLeft 0
 */
function drinksScrollRightHandler() {
    if (!drinksSubcategoryScroll) return;
    drinksSubcategoryScroll.scrollBy({ left: 200, behavior: 'smooth' });
}

/**
 * Picks a random item from the menuItems array
 * @returns {Object} Randomly selected menu item
 */
function pickRandomItem() {
    const candidateItems = filterItems(currentCategory, currentSearchTerm);
    if (!candidateItems || candidateItems.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * candidateItems.length);
    return candidateItems[randomIndex];
}

/**
 * Populates and displays the Surprise Me modal with a random item
 */
function showSurpriseModal() {
    const randomItem = pickRandomItem();

    if (!randomItem) {
        modalImage.src = '';
        modalImage.alt = '';
        modalImage.style.display = 'none';
        modalName.textContent = 'لا توجد عناصر متاحة';
        modalDescription.textContent = 'جرّب تغيير الفلاتر أو البحث.';
        modalPrice.textContent = '';
        surpriseModal.classList.add('visible');
        document.body.style.overflow = 'hidden';
        return;
    }

    // Populate modal with random item data
    const hasModalImage = !!(randomItem.image && randomItem.image.trim() !== '');
    if (hasModalImage) {
        modalImage.src = randomItem.image;
        modalImage.alt = randomItem.name;
        modalImage.style.display = '';
    } else {
        modalImage.src = '';
        modalImage.alt = '';
        modalImage.style.display = 'none';
    }
    modalName.textContent = randomItem.name;
    modalDescription.textContent = randomItem.description;
    modalPrice.textContent = randomItem.price;

    // Show modal
    surpriseModal.classList.add('visible');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

/**
 * Closes the Surprise Me modal
 */
function closeSurpriseModal() {
    surpriseModal.classList.remove('visible');
    document.body.style.overflow = ''; // Restore scrolling
}

/**
 * Toggles between dark and light themes
 */
function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Set new theme
    body.setAttribute('data-theme', newTheme);

    // Update icon
    updateThemeIcon(newTheme);

    // Save to localStorage
    localStorage.setItem('theme', newTheme);
}

/**
 * Updates the theme toggle button icon based on current theme
 * @param {string} theme - Current theme ('dark' or 'light')
 */
function updateThemeIcon(theme) {
    if (themeIcon) {
        themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

/**
 * Loads the saved theme preference from localStorage
 */
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

/**
 * Initializes event listeners for filter buttons, sub-category buttons, search input, and scroll arrows
 */
function initializeEventListeners() {
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });

    // Food sub-category buttons
    foodSubcategoryButtons.forEach(button => {
        button.addEventListener('click', handleSubcategoryClick);
    });

    // Drinks sub-category buttons
    drinksSubcategoryButtons.forEach(button => {
        button.addEventListener('click', handleSubcategoryClick);
    });

    // Search input event listener
    if (searchInput) {
        searchInput.addEventListener('input', handleSearchInput);
    }

    // Food scroll arrow event listeners
    if (scrollLeftBtn) {
        scrollLeftBtn.addEventListener('click', foodScrollLeftHandler);
    }
    if (scrollRightBtn) {
        scrollRightBtn.addEventListener('click', foodScrollRightHandler);
    }

    // Drinks scroll arrow event listeners
    if (drinksScrollLeftBtn) {
        drinksScrollLeftBtn.addEventListener('click', drinksScrollLeftHandler);
    }
    if (drinksScrollRightBtn) {
        drinksScrollRightBtn.addEventListener('click', drinksScrollRightHandler);
    }

    // Update arrows on scroll
    if (subcategoryScroll) {
        subcategoryScroll.addEventListener('scroll', updateFoodScrollArrows, { passive: true });
    }
    if (drinksSubcategoryScroll) {
        drinksSubcategoryScroll.addEventListener('scroll', updateDrinksScrollArrows, { passive: true });
    }

    // Update arrows on window resize
    window.addEventListener('resize', () => {
        updateFoodScrollArrows();
        updateDrinksScrollArrows();
    });

    // Surprise Me button event listener
    if (surpriseMeBtn) {
        surpriseMeBtn.addEventListener('click', showSurpriseModal);
    }

    // Theme Toggle button event listener
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Modal close event listeners
    if (modalClose) {
        modalClose.addEventListener('click', closeSurpriseModal);
    }
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeSurpriseModal);
    }

    // Close modal when clicking on overlay background
    if (surpriseModal) {
        surpriseModal.addEventListener('click', (event) => {
            if (event.target === surpriseModal) {
                closeSurpriseModal();
            }
        });
    }

    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        const updateScrollTopVisibility = () => {
            const shouldShow = window.scrollY > 200;
            scrollTopBtn.classList.toggle('visible', shouldShow);
        };

        updateScrollTopVisibility();
        window.addEventListener('scroll', updateScrollTopVisibility, { passive: true });
    }

    const speedDial = document.getElementById('speedDial');
    const chatFab = document.getElementById('chatFab');
    if (speedDial && chatFab) {
        chatFab.addEventListener('click', () => {
            speedDial.classList.toggle('show');
        });
    }
}

/**
 * Main initialization function
 * Sets up the application on page load
 */
function initializeApp() {
    // Load saved theme preference
    loadThemePreference();

    // Set initial subcategory bar visibility
    updateSubcategoryBarVisibility();

    // Render food items initially
    applyFiltersAndRender();

    // Set up event listeners
    initializeEventListeners();

    // Initial scroll arrow state check
    setTimeout(() => {
        updateFoodScrollArrows();
        updateDrinksScrollArrows();
    }, 100);

    // Log initialization for debugging
    console.log('✅ Cafe Menu App initialized successfully');
    console.log(`📋 Loaded ${menuItems.length} menu items`);
}

// ========================================
// Initialize on DOM Content Loaded
// ========================================
document.addEventListener('DOMContentLoaded', initializeApp);

window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    if (!splashScreen) return;

    setTimeout(() => {
        splashScreen.classList.add('explode-out');

        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 600);
    }, 2000);
});
