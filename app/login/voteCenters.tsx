const names:Object={
    "এম  এম  চৌধুরী মেমোরিয়াল উচ্চ বিদ্যালয়":1,
    "সেনবাগ সরকারি পাইলট উচ্চ বিদ্যালয়":2,
    "ছাতারপাইয়া উচ্চ বিদ্যালয়":8,
    "পূর্ব ছাতারপাইয়া সরকারি প্রাথমিক বিদ্যালয়":9,
    "বসন্তপুর সরকারি প্রাথমিক বিদ্যালয়":12,
    "বসন্তপুর ঈদগাহ দাখিল মাদ্রাসা":13,
    "বিরাহিমপুর সরকারি প্রাথমিক বিদ্যালয়":14,
    "লেমুয়া উচ্চ বিদ্যালয়":15,
    "কাদরা হামিদিয়া দাখিল মাদ্রাসা":3,
    "অষ্টদ্রোন সরকারি প্রাথমিক বিদ্যালয়":4,
    "বিন্নাগুনী সরকারি প্রাথমিক বিদ্যালয়":5,
    "সেনবাগ সরকারি কলেজ":6,
    "চিলাদি সরকারি প্রাথমিক বিদ্যালয়":11,
    "লুধুয়া সরকারি প্রাথমিক বিদ্যালয়":16,
    "খাজুরিয়া সরকারি প্রাথমিক বিদ্যালয়":17,
    "আটিয়াবাড়ী সরকারি প্রাথমিক বিদ্যালয়":19,
    "উন্দানিয়া সরকারি প্রাথমিক বিদ্যালয়":20,
    "কানকিরহাট উচ্চ বিদ্যালয়":21,
    "ইটবাড়ীয়া সরকারি প্রাথমিক বিদ্যালয়":22,
    "কেশারপাড় সরকারি প্রাথমিক বিদ্যালয়":23,
    "কালারাইতা সরকারি প্রাথমিক বিদ্যালয়":24,
    "পরিকোট উচ্চ বিদ্যালয়":25,
    "মতইন সরকারি প্রাথমিক বিদ্যালয়":26,
    "নলুয়া সরকারি প্রাথমিক বিদ্যালয়":27,
    "জিরুয়া সরকারি প্রাথমিক বিদ্যালয়":28,
    "ডমুরুয়া সরকারি প্রাথমিক বিদ্যালয়":29,
    "মইশাই সরকারি প্রাথমিক বিদ্যালয়":30,
    "এনায়েতপুর রহমতিয়া আলিম মাদ্রাসা":31,
    "গাজীরহাট উচ্চ বিদ্যালয়":33,
    "তাহিরপুর তামিরুল উম্মাত দাখিল মাদ্রাসা":34,
    "নিজ সেনবাগ সরকারি প্রাথমিক বিদ্যালয়":35,
    "উত্তর জয়নগর সরকারি প্রাথমিক বিদ্যালয়":36,
    "কাদরা সরকারি প্রাথমিক বিদ্যালয়":37,
    "হিজলী সরকারি প্রাথমিক বিদ্যালয়":38,
    "নজরপুর সরকারি প্রাথমিক বিদ্যালয়":39,
    "চাঁদপুর সরকারি প্রাথমিক বিদ্যালয়":40,
    "আহাম্মদপুর সরকারি প্রাথমিক বিদ্যালয়":42,
    "ছিলোনিয়া ইউনিয়ন উচ্চ বিদ্যালয়":43,
    "ইদিলপুর সরকারি প্রাথমিক বিদ্যালয়":44,
    "নাজিরনগর সরকারি প্রাথমিক বিদ্যালয়":45,
    "উত্তর মানিকপুর সরকারি প্রাথমিক বিদ্যালয়":46,
    "মানিকপুর সরকারি প্রাথমিক বিদ্যালয়":47,
    "উত্তর গোরকাটা সরকারি প্রাথমিক বিদ্যালয়":48,
    "পূর্ব ইয়ারপুর সরকারি প্রাথমিক বিদ্যালয়":49,
    "ইয়ারপুর উচ্চ বিদ্যালয়":50,
    "ডোমনাকান্দি সরকারি প্রাথমিক বিদ্যালয়":51,
    "উত্তর সাহাপুর সরকারি প্রাথমিক বিদ্যালয়":52,
    "আজিজপুর সরকারি প্রাথমিক বিদ্যালয়":53,
    "সায়েস্তানগর সরকারি প্রাথমিক বিদ্যালয়":55,
    "কাবিলপুর সরকারি প্রাথমিক বিদ্যালয়":57,
    "সাদেকপুর সরকারি প্রাথমিক বিদ্যালয়":58,
    "পশ্চিম আহম্মদপুর সরকারি প্রাথমিক বিদ্যালয়":59,
    "শের-ই বাংলা উচ্চ বিদ্যালয়":60,
    "সেবারহাট সরকারি প্রাথমিক বিদ্যালয়":61,
    "রাজারামপুর সরকারি প্রাথমিক বিদ্যালয়":62,
    "দক্ষিণ মোহাম্মদপুর সরকারি প্রাথমিক বিদ্যালয়":63,
    "পূর্ব মোহাম্মদপুর সরকারি প্রাথমিক বিদ্যালয়":65,
    "মদিনাতুল উলূম নূরানী হাফিজিয়া মাদরাসা":66,
    "উত্তর মোহাম্মদপুর সরকারি প্রাথমিক বিদ্যালয়":67,
    "ধর্মপুর সরকারি প্রাথমিক বিদ্যালয়":68,
    "জয়নগর উচ্চ বিদ্যালয়":69,
    "কালিকাপুর সরকারি প্রাথমিক বিদ্যালয়":70,
    "ফকিরহাট হাজী অছিমুদ্দিন সরকারি প্রাথমিক বিদ্যালয়":71,
    "বিজবাগ রাব্বানিয়া আলিম মাদরাসা":72,
    "বীজবাগ নবকৃষ্ণ উচ্চ বিদ্যালয়":74,
    "মমিন উল্যাহ সরকারি প্রাথমিক বিদ্যালয়":76,
    "এসফাকুল হক মান্না আলিম মাদ্রাসা":77,
    "নবীপুর উচ্চ বিদ্যালয়":78,
    "শ্রীপদ্দি সরকারি প্রাথমিক বিদ্যালয়":79,
    "কুতুবেরহাট উচ্চ বিদ্যালয়":80,
    "বিষ্ণুপুর সরকারি প্রাথমিক বিদ্যালয়":81,
    "ঠেকারহাট সরকারি প্রাথমিক বিদ্যালয়":82,
    "ফতেহপুর মনিরুন্নেছা সাহেবানী সরকারি প্রাথমিক বিদ্যালয়":56,
    "পশ্চিম ছাতারপাইয়া দারুল উলুম কাওমী মাদ্রাসা":7,
    "পঃ ছাতারপাইয়া পল্লী মঙ্গল সরকারি প্রাথমিক বিদ্যালয়":10,
    "খাজুরিয়া ইসলামিয়া জামিয়া মাদ্রাসা":18,
    "মটুবী সরকারি প্রাথমিক বিদ্যালয়":32,
    "মহিদিপুর এ জি সরকারি প্রাথমিক বিদ্যালয়":54,
    "মোহাম্মদপুর বালিকা সরকারি প্রাথমিক বিদ্যালয়":64,
    "বালিয়াকান্দি সরকারি প্রাথমিক বিদ্যালয়":73,
    "চাঁদপুর আদর্শ উচ্চ বিদ্যালয়":41,
    "গোপালপুর সরকারি প্রাথমিক বিদ্যালয়":75
  }

  export default names;