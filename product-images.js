/* Product photography registry. These are manufacturer/distributor product photos, not generated artwork. */
(function(){
  const APPLE_COMPARE='https://www.apple.com/v/iphone/compare/am/images/overview/';
  const IPAD_COMPARE='https://www.apple.com/v/ipad/compare/am/images/overview/';
  const MAC_COMPARE='https://www.apple.com/v/mac/compare/ah/images/overview/';
  const WATCH_COMPARE='https://www.apple.com/v/watch/compare/ai/images/overview/';
  const imageFrom=(base,file)=>base+file;
  const colourSet=(colors,base=APPLE_COMPARE)=>({colors:Object.fromEntries(Object.entries(colors).map(([colour,file])=>[colour,imageFrom(base,file)]))});
  /* Every iPhone entry below points to an Apple comparison packshot for that exact model and finish. */
  const iphones={
    duo:{colors:{'Night Sky':'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-duo-finish-select-night-sky-202609_GEO_AE?wid=940&hei=1112&fmt=png-alpha','Star White':'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-duo-finish-select-star-white-202609_GEO_AE?wid=940&hei=1112&fmt=png-alpha'}},
    '18pro':{colors:{Black:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-black-202609?wid=940&hei=1112&fmt=png-alpha',Silver:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-silver-202609?wid=940&hei=1112&fmt=png-alpha',Glacier:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-glacier-202609?wid=940&hei=1112&fmt=png-alpha',Burgundy:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-burgundy-202609?wid=940&hei=1112&fmt=png-alpha'}},
    '18promax':colourSet({Black:'compare_iphone_18_pro_max_black__s6eln189sr2u_large.jpg',Silver:'compare_iphone_18_pro_max_silver__bkvexz4dqd36_large.jpg',Glacier:'compare_iphone_18_pro_max_glacier__f6f28qwmryuu_large.jpg',Burgundy:'compare_iphone_18_pro_max_burgundy__dcz67l4005oy_large.jpg'}),
    air:colourSet({'Space Black':'compare_iphone_air_space_black__erjeo9fa6oa6_large.jpg','Cloud White':'compare_iphone_air_cloud_white__fay39sc7sru6_large.jpg','Light Gold':'compare_iphone_air_light_gold__c1s3ly3yjuc2_large.jpg','Sky Blue':'compare_iphone_air_sky_blue__kvm15b10x6qa_large.jpg'}),
    '17promax':colourSet({'Deep Blue':'compare_iphone17_pro_max_deep_blue__frgcd836v866_large.jpg','Cosmic Orange':'compare_iphone17_pro_max_cosmic_orange__d7yolstz8cmu_large.jpg',Silver:'compare_iphone17_pro_max_silver__dtw5i9e8osmu_large.jpg'}),
    '17pro':colourSet({'Deep Blue':'compare_iphone17_pro_deep_blue__dz8sfcp4h742_large.jpg','Cosmic Orange':'compare_iphone17_pro_cosmic_orange__dm1qripnvq82_large.jpg',Silver:'compare_iphone17_pro_silver__c7bbt5uwieye_large.jpg'}),
    '17':colourSet({Black:'compare_iphone17_black__epmfmcpap0sy_large.jpg',White:'compare_iphone17_white__cddjqf5mzlaq_large.jpg','Mist Blue':'compare_iphone17_mist_blue__fjf0c9euujee_large.jpg',Sage:'compare_iphone17_sage__edsxj53vsn0i_large.jpg',Lavender:'compare_iphone17_lavender__etuerbkei0ya_large.jpg'}),
    '17e':colourSet({Black:'compare_iphone17e_black__f8ox5biet3au_large.jpg',White:'compare_iphone17e_white__dznzme1jxvki_large.jpg','Soft Pink':'compare_iphone17e_pink__bj426l1s94gi_large.jpg'}),
    '16promax':colourSet({'Black Titanium':'compare_iphone16_pro_max_black_titanium__evlilxt8g2mq_large.jpg','White Titanium':'compare_iphone16_pro_max_white_titanium__nrwzujp5v762_large.jpg','Natural Titanium':'compare_iphone16_pro_max_natural_titanium__finz5cbww0mm_large.jpg','Desert Titanium':'compare_iphone16_pro_max_desert_titanium__f8058hcu01ua_large.jpg'}),
    '16pro':colourSet({'Black Titanium':'compare_iphone16_pro_black_titanium__c7t71uah5qky_large.jpg','White Titanium':'compare_iphone16_pro_white_titanium__mjfjda73w72q_large.jpg','Natural Titanium':'compare_iphone16_pro_natural_titanium__b58sfb3hvv36_large.jpg','Desert Titanium':'compare_iphone16_pro_desert_titanium__ftixjyyve6qi_large.jpg'}),
    '16plus':colourSet({Black:'compare_iphone16_plus_black__fzb15ieuikey_large.jpg',White:'compare_iphone16_plus_white__rqden70u9uqi_large.jpg',Pink:'compare_iphone16_plus_pink__egpda1o8qu82_large.jpg',Teal:'compare_iphone16_plus_teal__fd5m157o5h6y_large.jpg',Ultramarine:'compare_iphone16_plus_ultramarine__fedlzqf2pmqi_large.jpg'}),
    '16':colourSet({Black:'compare_iphone16_black__bedc0hlw316q_large.jpg',White:'compare_iphone16_white__dcn5vobxo7ki_large.jpg',Pink:'compare_iphone16_pink__fzr1z22a7m2q_large.jpg',Teal:'compare_iphone16_teal__fkzqehm57iai_large.jpg',Ultramarine:'compare_iphone16_ultramarine__sr260qois4am_large.jpg'}),
    '16e':colourSet({Black:'compare_iphone16e_black__folwa2rvc3ma_large.jpg',White:'compare_iphone16e_white__qfwztyphaj2u_large.jpg'}),
    '15promax':colourSet({'Black Titanium':'compare_iphone15_pro_max_black_titanium__djidfm1dcmie_large.jpg','White Titanium':'compare_iphone15_pro_max_white_titanium__citdiqo2e0gi_large.jpg','Blue Titanium':'compare_iphone15_pro_max_blue_titanium__c8xeminnbm82_large.jpg','Natural Titanium':'compare_iphone15_pro_max_natural_titanium__byvhspupwiuq_large.jpg'}),
    '15pro':colourSet({'Black Titanium':'compare_iphone15_pro_black_titanium__etz96gq8ruoi_large.jpg','White Titanium':'compare_iphone15_pro_white_titanium__gnb53137x2um_large.jpg','Blue Titanium':'compare_iphone15_pro_blue_titanium__bima7n6vpb0i_large.jpg','Natural Titanium':'compare_iphone15_pro_natural_titanium__scqfo7q20n2i_large.jpg'}),
    '15plus':colourSet({Black:'compare_iphone15_plus_black__chh9za6pd2vm_large.jpg',Green:'compare_iphone15_plus_green__c2dkb4wvkgae_large.jpg',Yellow:'compare_iphone15_plus_yellow__bqpclyoi3muu_large.jpg',Pink:'compare_iphone15_plus_pink__fai0b9il6cq6_large.jpg',Blue:'compare_iphone15_plus_blue__9fcof0t4lk2i_large.jpg'}),
    '15':colourSet({Black:'compare_iphone15_black__eer8kwdkdjyq_large.jpg',Green:'compare_iphone15_green__f6r83449uoyi_large.jpg',Yellow:'compare_iphone15_yellow__bqka09cyvqia_large.jpg',Pink:'compare_iphone15_pink__d2gop48s2aye_large.jpg',Blue:'compare_iphone15_blue__cq4qefddyl8i_large.jpg'}),
    '14promax':colourSet({'Space Black':'compare_iphone14_pro_max_space_black__dve23pjslceq_large.jpg',Silver:'compare_iphone14_pro_max_silver__esuba240yvqu_large.jpg',Gold:'compare_iphone14_pro_max_gold__ssb2j2q92mi6_large.jpg','Deep Purple':'compare_iphone14_pro_max_deep_purple__r2k8f3zaymi6_large.jpg'}),
    '14pro':colourSet({'Space Black':'compare_iphone14_pro_space_black__dym2kqku7n6u_large.jpg',Silver:'compare_iphone14_pro_silver__knexgp9cr5m6_large.jpg',Gold:'compare_iphone14_pro_gold__cqyq3tm1zuxe_large.jpg','Deep Purple':'compare_iphone14_pro_deep_purple__p5fjz0npooiq_large.jpg'}),
    '14plus':colourSet({Midnight:'compare_iphone14_plus_midnight__c9kmil1aq0ae_large.jpg',Purple:'compare_iphone14_plus_purple__ebfjg5vvyu0y_large.jpg',Starlight:'compare_iphone14_plus_starlight__f49kqx4mhlea_large.jpg','Product Red':'compare_iphone14_plus_red__zu2trl902due_large.jpg',Blue:'compare_iphone14_plus_blue__ct1alvw58q82_large.jpg',Yellow:'compare_iphone14_plus_yellow__cijyg33497rm_large.jpg'}),
    '14':colourSet({Midnight:'compare_iphone14_midnight__bvwj36frtody_large.jpg',Purple:'compare_iphone14_purple__cjajxy1iclg2_large.jpg',Starlight:'compare_iphone14_starlight__f6rbukewn0mu_large.jpg','Product Red':'compare_iphone14_red__bu1vzrxdbf7m_large.jpg',Blue:'compare_iphone14_blue__c9pjeddi2qye_large.jpg',Yellow:'compare_iphone14_yellow__fvyq7k2nn4ya_large.jpg'}),
    '13promax':colourSet({Graphite:'compare_iphone13_pro_max_graphite__e0rjnrin6ncm_large.jpg',Gold:'compare_iphone13_pro_max_gold__dpkma79ndo8y_large.jpg',Silver:'compare_iphone13_pro_max_silver__dbfz7im067e6_large.jpg','Sierra Blue':'compare_iphone13_pro_max_sierra_blue__ccdnnwrapdau_large.jpg','Alpine Green':'compare_iphone13_pro_max_alpine_green__erdqy93lc18i_large.jpg'}),
    '13pro':colourSet({Graphite:'compare_iphone13_pro_graphite__1v1ipyvu1eae_large.jpg',Gold:'compare_iphone13_pro_gold__ea2j8y7hska6_large.jpg',Silver:'compare_iphone13_pro_silver__dzq8ol0di7ee_large.jpg','Sierra Blue':'compare_iphone13_pro_sierra_blue__q5g805k09uym_large.jpg','Alpine Green':'compare_iphone13_pro_alpine_green__d3ggyu8riw66_large.jpg'}),
    '13':colourSet({Midnight:'compare_iphone13_midnight__dc2w8cyhc9iu_large.jpg',Starlight:'compare_iphone13_starlight__135hisvufoim_large.jpg','Product Red':'compare_iphone13_product_red__gmrn6xy6l4ya_large.jpg',Blue:'compare_iphone13_blue__dn52e83eu5yu_large.jpg',Pink:'compare_iphone13_pink__e3vv1er86eqa_large.jpg',Green:'compare_iphone13_green__e9rhd84kj3yq_large.jpg'}),
    '13mini':colourSet({Midnight:'compare_iphone13_mini_midnight__e8z05098gnma_large.jpg',Starlight:'compare_iphone13_mini_starlight__mg21bdoe6f62_large.jpg','Product Red':'compare_iphone13_mini_product_red__c0x8iraijcmu_large.jpg',Blue:'compare_iphone13_mini_blue__e1ohuf2klquu_large.jpg',Pink:'compare_iphone13_mini_pink__blln0h9o7f0i_large.jpg',Green:'compare_iphone13_mini_green__eaa4pvqtsbiq_large.jpg'}),
    se3:colourSet({Midnight:'compare_iphoneSE_3rd_gen_midnight__c57d9v9oipyu_large.jpg',Starlight:'compare_iphoneSE_3rd_gen_starlight__f3ys7aooaiqi_large.jpg','Product Red':'compare_iphoneSE_3rd_gen_red__do7m5pqh39ci_large.jpg'}),
    '12promax':colourSet({Graphite:'compare_iphone12_pro_max_graphite__b6j4sfia3yaa_large.jpg',Silver:'compare_iphone12_pro_max_silver__1mkvn3uvleqi_large.jpg',Gold:'compare_iphone12_pro_max_gold__bknb963nzyqa_large.jpg','Pacific Blue':'compare_iphone12_pro_max_pacific_blue__i251ea884ei6_large.jpg'}),
    '12pro':colourSet({Graphite:'compare_iphone12_pro_graphite__exopjoz6u2ye_large.jpg',Silver:'compare_iphone12_pro_silver__fdy4rgvkd26a_large.jpg',Gold:'compare_iphone12_pro_gold__b8fkcnuqh8vm_large.jpg','Pacific Blue':'compare_iphone12_pro_pacific_blue__gniw0xbrh7ue_large.jpg'}),
    '12':colourSet({Black:'compare_iphone12_black__gj93q2eeofma_large.jpg',White:'compare_iphone12_white__bkv9u0pios6a_large.jpg','Product Red':'compare_iphone12_red__3fpikxvolteu_large.jpg',Green:'compare_iphone12_green__cua80qomesgi_large.jpg',Blue:'compare_iphone12_blue__ffk87fz4nuqi_large.jpg',Purple:'compare_iphone12_purple__dgt75n0isaeu_large.jpg'}),
    '12mini':colourSet({Black:'compare_iphone12_mini_black__f27jirmfeomu_large.jpg',White:'compare_iphone12_mini_white__fhgs1mo2zgmm_large.jpg','Product Red':'compare_iphone12_mini_red__er2imbeznvgy_large.jpg',Green:'compare_iphone12_mini_green__3ndpo9itp42u_large.jpg',Blue:'compare_iphone12_mini_blue__iyr1fvvjraai_large.jpg',Purple:'compare_iphone12_mini_purple__gm5blksev6ai_large.jpg'}),
    '11promax':colourSet({'Midnight Green':'compare_iphone11_pro_max_midnightgreen__dhu7a2mzfpoy_large.jpg',Silver:'compare_iphone11_pro_max_silver__gex9b2t8hx2e_large.jpg','Space Gray':'compare_iphone11_pro_max_spacegrey__dut95hfk3j42_large.jpg',Gold:'compare_iphone11_pro_max_gold__fw9uqr5wdqa2_large.jpg'}),
    '11pro':colourSet({'Midnight Green':'compare_iphone11_pro_midnightgreen__ghme5a7mxnqm_large.jpg',Silver:'compare_iphone11_pro_silver__ckxa8mvp0ej6_large.jpg','Space Gray':'compare_iphone11_pro_spacegrey__5tufecsmnjmq_large.jpg',Gold:'compare_iphone11_pro_gold__c24q20hey2i6_large.jpg'}),
    '11':colourSet({Black:'compare_iphone11_black__luskajpcyaaa_large.jpg',Green:'compare_iphone11_green__c1vgig828paq_large.jpg',Yellow:'compare_iphone11_yellow__dnty92kzldg2_large.jpg',Purple:'compare_iphone11_purple__dncianr6j2uu_large.jpg','Product Red':'compare_iphone11_red__b22porlgz2qa_large.jpg',White:'compare_iphone11_white__c1bigtkwcsq6_large.jpg'})
  };
  const exact={
    pro11m5:{colors:{Silver:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-11-select-wifi-silver-202405?wid=940&hei=1112&fmt=png-alpha','Space Black':'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-11-select-wifi-spaceblack-202405?wid=940&hei=1112&fmt=png-alpha'}},
    pro13m5:colourSet({Silver:'ipad_pro_13_m5_silver__dyubev4o3s8y_large.jpg','Space Black':'ipad_pro_13_m5_spaceblack__eim4xjmegeuu_large.jpg'},IPAD_COMPARE),
    air11m3:colourSet({Blue:'ipad_air_11_m3_blue__gbre4u4if6em_large.jpg',Purple:'ipad_air_11_m3_purple__b6zq5qcxu9ci_large.jpg',Starlight:'ipad_air_11_m3_starlight__dn8rod7w6cia_large.jpg','Space Gray':'ipad_air_11_m3_spacegray__btc86zw1glbm_large.jpg'},IPAD_COMPARE),
    air13m3:colourSet({Blue:'ipad_air_13_m3_blue__gahhpn9r2pea_large.jpg',Purple:'ipad_air_13_m3_purple__d86auskkzl4y_large.jpg',Starlight:'ipad_air_13_m3_starlight__bs14uq1fwa4i_large.jpg','Space Gray':'ipad_air_13_m3_spacegray__fu35tug8txua_large.jpg'},IPAD_COMPARE),
    a16:colourSet({Silver:'ipad_11th_a16_silver__cby9d710dnhy_large.jpg',Blue:'ipad_11th_a16_blue__eyfta89o7eie_large.jpg',Pink:'ipad_11th_a16_pink__fz6ag0ueptme_large.jpg',Yellow:'ipad_11th_a16_yellow__ef6aso27omye_large.jpg'},IPAD_COMPARE),
    pro14m5:colourSet({'Space Black':'compare_macbook_pro_m5_14_spaceblack__e8bg1b4hasii_large.jpg',Silver:'compare_macbook_pro_m5_14_silver__gjpnrwj6g4qe_large.jpg'},MAC_COMPARE),
    pro14m5pro:colourSet({'Space Black':'compare_macbook_pro_m5_14_spaceblack__e8bg1b4hasii_large.jpg',Silver:'compare_macbook_pro_m5_14_silver__gjpnrwj6g4qe_large.jpg'},MAC_COMPARE),
    pro16m5pro:colourSet({'Space Black':'compare_macbook_pro_m5_16_spaceblack__81ui3u6gyuqu_large.jpg',Silver:'compare_macbook_pro_m5_16_silver__egqckriiesia_large.jpg'},MAC_COMPARE),
    air13m5:colourSet({'Sky Blue':'compare_macbook_air_m5_skyblue__fty6fmk5v1me_large.jpg',Silver:'compare_macbook_air_m5_silver__bbwooiazy7cy_large.jpg',Starlight:'compare_macbook_air_m5_starlight__bwz8vshj17ki_large.jpg',Midnight:'compare_macbook_air_m5_midnight__dsdy6ha5450m_large.jpg'},MAC_COMPARE),
    air15m5:colourSet({'Sky Blue':'compare_macbook_air_m5_15_skyblue__bvkzzp9qmdjm_large.jpg',Silver:'compare_macbook_air_m5_15_silver__gdgd4la8qemq_large.jpg',Starlight:'compare_macbook_air_m5_15_starlight__f89sxr5uo1qq_large.jpg',Midnight:'compare_macbook_air_m5_15_midnight__fhljrimm88i2_large.jpg'},MAC_COMPARE),
    ultra3:colourSet({'Natural Titanium':'compare_watch_ultra_3_titanium_natural__f4e1mwataoa6_large.jpg','Black Titanium':'compare_watch_ultra_3_titanium_black__et3o71qjhxg2_large.jpg'},WATCH_COMPARE),
    series11al:colourSet({'Rose Gold':'compare_watch_series_11_aluminum_rose_gold__teqtd20c3f2q_large.jpg',Silver:'compare_watch_series_11_aluminum_silver__cg9kl6knvy2q_large.jpg','Space Gray':'compare_watch_series_11_aluminum_space_gray__e9a6tq118vue_large.jpg','Jet Black':'compare_watch_series_11_aluminum_jet_black__e6e4ueftosgi_large.jpg'},WATCH_COMPARE),
    series11ti:colourSet({'Gold Titanium':'compare_watch_series_11_titanium_gold__eytpefpwnfsm_large.jpg','Natural Titanium':'compare_watch_series_11_titanium_natural__bz7e5yloh9qq_large.jpg','Slate Titanium':'compare_watch_series_11_titanium_slate__f2836i54v8yi_large.jpg'},WATCH_COMPARE),
    se3:colourSet({Midnight:'compare_watch_se_3_aluminum_midnight__cmsklrr1ariq_large.jpg',Starlight:'compare_watch_se_3_aluminum_starlight__berhf6s2b1bm_large.jpg'},WATCH_COMPARE)
  };
  /*
   * A product image is only ever allowed to fall back to another source for the
   * same model.  A category-level fallback looks convenient, but it is
   * misleading: an unavailable Duo image must not turn into an iPhone 18 Pro
   * image (or vice versa).
   *
   * The registry remains backwards-compatible with a string or an array.  To
   * add colour-specific photography, use this shape for a model entry:
   * { default: '...', colors: { 'Black Titanium': ['...', '...'] } }
   * If a colours map exists and the selected colour has no source, we show the
   * exact-model text fallback rather than a photo in a different finish.
   */
  function normaliseColour(value){return String(value||'').toLowerCase().replace(/[^a-z0-9]+/g,'')}
  function urlsFrom(value){
    if(!value)return [];
    if(typeof value==='string')return [value];
    if(Array.isArray(value))return value.flatMap(urlsFrom).filter(Boolean);
    if(typeof value==='object')return urlsFrom(value.urls||value.images||value.url||value.src||value.image);
    return [];
  }
  function sourceEntry(m,category){return(category==='iphone'?iphones[m.id]:exact[m.id])||null}
  function resolveProductImage(m,category,colour){
    const entry=sourceEntry(m,category);
    const result={urls:[],colourMatched:false,colourMissing:false};
    if(!entry)return result;
    if(typeof entry!=='object'||Array.isArray(entry)){result.urls=urlsFrom(entry);return result}
    const variants=entry.colors||entry.colours||entry.variants;
    if(variants&&colour){
      const wanted=normaliseColour(colour);
      const key=Object.keys(variants).find(k=>normaliseColour(k)===wanted);
      if(!key){result.colourMissing=true;return result}
      result.urls=urlsFrom(variants[key]);
      result.colourMatched=result.urls.length>0;
      return result;
    }
    /* Homepage cards have no selected finish. Use this model's first genuine
       finish photo—not a different phone—until a finish is selected. */
    if(variants){
      const first=Object.keys(variants)[0];
      result.urls=urlsFrom(first&&variants[first]);
      return result;
    }
    result.urls=urlsFrom(entry.default||entry.images||entry.urls||entry.image||entry.url||entry.src);
    return result;
  }
  function fallbackFor(img,m,colour,reason){
    const host=img.parentElement;if(!host)return null;
    let fallback=host.querySelector('.product-photo-fallback');
    if(!fallback){fallback=document.createElement('div');fallback.className='product-photo-fallback';fallback.setAttribute('role','status');fallback.setAttribute('aria-live','polite');host.appendChild(fallback)}
    fallback.replaceChildren();
    const name=document.createElement('strong');name.textContent=m.name;
    const detail=document.createElement('span');detail.textContent=colour?colour+' · '+reason:reason;
    fallback.append(name,detail);return fallback;
  }
  function emitImageState(img,state,detail){img.dispatchEvent(new CustomEvent('productimagestate',{detail:{state,...detail}}))}
  window.resolveProductImage=resolveProductImage;
  window.deviceImageSources=function(m,category,colour){return resolveProductImage(m,category,colour).urls};
  window.setProductImage=function(img,m,category,colour){
    if(!img||!m)return;
    const request=String((Number(img.dataset.imageRequest)||0)+1),resolved=resolveProductImage(m,category,colour),urls=resolved.urls.slice();let i=0;
    img.dataset.imageRequest=request;img.dataset.product=m.id;img.dataset.productColour=colour||'';img.alt=m.name+(colour?' in '+colour:'')+' product photo';
    const isCurrent=()=>img.dataset.imageRequest===request;
    const fallback=fallbackFor(img,m,colour,resolved.colourMissing?'This exact finish needs a product photo':'Product photo temporarily unavailable');
    const showFallback=(reason)=>{if(!isCurrent())return;img.removeAttribute('src');img.hidden=true;img.classList.remove('product-photo-loading');img.classList.add('product-photo-missing');fallbackFor(img,m,colour,reason).hidden=false;emitImageState(img,'missing',{model:m,category,colour})};
    const next=()=>{
      if(!isCurrent())return;
      if(i>=urls.length){showFallback(resolved.colourMissing?'This exact finish needs a product photo':'Product photo temporarily unavailable');return}
      img.hidden=false;img.classList.remove('product-photo-missing');img.classList.add('product-photo-loading');img.dataset.productImageKind=/apple\.com\/v\/iphone\/compare\//.test(urls[i])?'compare':'transparent';fallback.hidden=true;
      img.onload=()=>{if(!isCurrent())return;img.classList.remove('product-photo-loading');img.hidden=false;fallback.hidden=true;emitImageState(img,'loaded',{model:m,category,colour,colourMatched:resolved.colourMatched})};
      img.onerror=next;img.src=urls[i++];
    };
    next();
  };
})();

