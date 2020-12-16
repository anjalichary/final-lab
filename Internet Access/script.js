var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key8h1t6xA5oibZyf'}).base('appYts1L3fJOIjT3y');


function listCaseStudies() {
  
  // request the TOC data
  base('Case Studies').select({
    sort: [{field: "TOC_Order", direction: "asc"}]
  }).firstPage(onCaseStudies);

  
  // populate HTML TOC list
  function onCaseStudies(err, records) {
    if (err) { console.error(err); return; }
    
    let project_list = document.getElementsByClassName('project-list')[0];
    project_list.innerHTML = "";
    
    for (let i = 0; i < records.length; i++) {
      let li = document.createElement("li");
      let title = records[i].get("Title");
      let id = records[i].id;
      li.innerHTML = `<a href="case_study.html?${id}">${title}</a>`;
      project_list.appendChild(li);
    }
  }

}


function showCaseStudy() {
  
  // get the case study id from the url query string
  let id = window.location.search.substring(1);

  
  base('Case Studies').find(id, function(err, record) {
      if (err) { console.error(err); return; }
      console.log('Retrieved', record.id, record);

      let case_study = document.getElementsByClassName('case-study')[0]; 
      let title = case_study.getElementsByClassName('title')[0];
      let head = case_study.getElementsByClassName('head')[0];
      let info = case_study.getElementsByClassName('info')[0];
      let overview = case_study.getElementsByClassName('overview')[0];
      let overview1 = case_study.getElementsByClassName('overview1')[0];
      let data = case_study.getElementsByClassName('data')[0];
      let analyze = case_study.getElementsByClassName('analyze')[0];
      let next = case_study.getElementsByClassName('next')[0];
      let proto = case_study.getElementsByClassName('proto')[0];
      let final = case_study.getElementsByClassName('final')[0];
      let future = case_study.getElementsByClassName('future')[0];
      let direction = case_study.getElementsByClassName('direction')[0];
      let stat = case_study.getElementsByClassName('stat')[0];

      title.innerText = record.fields['Title'];
      head.innerHTML = record.fields['Head'];
      info.innerHTML = record.fields['Info']
      overview.innerHTML = record.fields['Overview']
      overview1.innerHTML = record.fields['Overview1']
      data.innerHTML = record.fields['Data']
      analyze.innerHTML = record.fields['Analyze']
      next.innerHTML = record.fields['Next']
      proto.innerHTML = record.fields['Proto']
      final.innerHTML = record.fields['Final']
      future.innerHTML = record.fields['Future']
      direction.innerHTML = record.fields['Direction']
     
      gallery.innerHTML = "";
      for (let i = 0; i < record.fields.Gallery.length; i++){
        let gallery_image = document.createElement("img");
        gallery_image.src = record.fields.Gallery[i].url;
        gallery.appendChild(gallery_image);
      }



    
    
    
  });
}






