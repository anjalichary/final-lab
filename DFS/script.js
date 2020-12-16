var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key8h1t6xA5oibZyf'}).base('appwYMbCzNxhnxe7k');


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

  base("Case Studies").find(id, function (err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Retrieved", record.id, record);

    let case_study = document.getElementsByClassName("case-study")[0];
    let title = case_study.getElementsByClassName("title")[0];
    let headings = case_study.getElementsByClassName("headings")[0];
    let overview = case_study.getElementsByClassName("overview")[0];
    let first = case_study.getElementsByClassName("first")[0];
    let research = case_study.getElementsByClassName("research")[0];
    let gallery1 = case_study.getElementsByClassName("gallery1")[0];
    let head = case_study.getElementsByClassName("head")[0];
    let info = case_study.getElementsByClassName("info")[0];
    let marketing = case_study.getElementsByClassName("marketing")[0];
    let program = case_study.getElementsByClassName("program")[0];
    let fliers = case_study.getElementsByClassName("fliers")[0];
    let social = case_study.getElementsByClassName("social")[0];
    let media = case_study.getElementsByClassName("media")[0];
    let posts = case_study.getElementsByClassName("posts")[0];
    let cake = case_study.getElementsByClassName("cake")[0];
    let kit = case_study.getElementsByClassName("kit")[0];
    let book = case_study.getElementsByClassName("book")[0];
    let website = case_study.getElementsByClassName("website")[0];
    let design = case_study.getElementsByClassName("design")[0];
    let overview1 = case_study.getElementsByClassName("overview1")[0];

    title.innerText = record.fields["Title"];
    headings.innerText = record.fields["Headings"];
    overview.innerHTML = record.fields["Overview"];
    research.innerText = record.fields["Research"];
    head.innerText = record.fields["Head"];
    info.innerHTML = record.fields["Info"];
    marketing.innerHTML = record.fields["Marketing"];
    program.innerHTML = record.fields["Program"];
    social.innerHTML = record.fields["Social"];
    media.innerHTML = record.fields["Media"];
    cake.innerHTML = record.fields["Cake"]
    kit.innerHTML = record.fields["Kit"]
    website.innerHTML = record.fields["Website"]
    overview1.innerHTML = record.fields["Overview1"];
    

    // let url = record.fields.Gallery[0].url;
    first.innerHTML = "";

    for (let i = 0; i < record.fields.First.length; i++) {
      let first_image = document.createElement("img");
      first_image.src = record.fields.First[i].url;
      first.appendChild(first_image);
    }

    gallery1.innerHTML = "";
    for (let i = 0; i < record.fields.Gallery1.length; i++) {
      let gallery1_image = document.createElement("img");
      gallery1_image.src = record.fields.Gallery1[i].url;
      gallery1.appendChild(gallery1_image);
    }

    fliers.innerHTML = "";
    for (let i = 0; i < record.fields.Fliers.length; i++) {
      let fliers_image = document.createElement("img");
      fliers_image.src = record.fields.Fliers[i].url;
      fliers.appendChild(fliers_image);
    }

    posts.innerHTML = "";
    for (let i = 0; i < record.fields.Posts.length; i++) {
      let posts_image = document.createElement("img");
      posts_image.src = record.fields.Posts[i].url;
      posts.appendChild(posts_image);
    }

    book.innerHTML = "";
    for (let i = 0; i < record.fields.Book.length; i++) {
      let book_image = document.createElement("img");
      book_image.src = record.fields.Book[i].url;
      book.appendChild(book_image);
    }

   design.innerHTML = "";
    for (let i = 0; i < record.fields.Design.length; i++) {
      let design_image = document.createElement("img");
      design_image.src = record.fields.Design[i].url;
      design.appendChild(design_image);
    }






  });
}






