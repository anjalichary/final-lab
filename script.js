var Airtable = require("airtable");
var base = new Airtable({ apiKey: "key8h1t6xA5oibZyf" }).base(
  "appG3LMIzG8Rm1WPV"
);

function listCaseStudies() {
  // request the TOC data
  base("Case Studies")
    .select({
      sort: [{ field: "TOC_Order", direction: "asc" }]
    })
    .firstPage(onCaseStudies);

  // populate HTML TOC list
  function onCaseStudies(err, records) {
    if (err) {
      console.error(err);
      return;
    }

    let project_list = document.getElementsByClassName("project-list")[0];
    project_list.innerHTML = "";

    for (let i = 0; i < records.length; i++) {
      let li = document.createElement("li");
      let title = records[i].get("Title");
      let id = records[i].id;
      li.innerHTML = `<a href="case_study.html?${id}">${title}</a>`;
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
    let gallery3 = case_study.getElementsByClassName("gallery3")[0];
    let research = case_study.getElementsByClassName("research")[0];
    let overview1 = case_study.getElementsByClassName("overview1")[0];
    let user = case_study.getElementsByClassName("user")[0];
    let takeaways = case_study.getElementsByClassName("takeaways")[0];
    let plus = case_study.getElementsByClassName("plus")[0];
    let flow = case_study.getElementsByClassName("flow")[0];
    let design = case_study.getElementsByClassName("design")[0];
    let principles = case_study.getElementsByClassName("principles")[0];
    let gallery1 = case_study.getElementsByClassName("gallery1")[0];
    let style = case_study.getElementsByClassName("style")[0];
    let gallery2 = case_study.getElementsByClassName("gallery2")[0];
    let user1 = case_study.getElementsByClassName("user1")[0];
    let user2 = case_study.getElementsByClassName("user2")[0];
    let user3 = case_study.getElementsByClassName("user3")[0];
    let head = case_study.getElementsByClassName("head")[0];
    let info = case_study.getElementsByClassName("info")[0];
    let end = case_study.getElementsByClassName("end")[0];
    let reflect = case_study.getElementsByClassName("reflect")[0];
    let app = case_study.getElementsByClassName("app")[0];
    let feature = case_study.getElementsByClassName("feature")[0];
    let lauryn = case_study.getElementsByClassName("lauryn")[0];
    let noya = case_study.getElementsByClassName("noya")[0];
    let trevor = case_study.getElementsByClassName("trevor")[0];
    let over = case_study.getElementsByClassName("over")[0];
    let guide = case_study.getElementsByClassName("guide")[0];

    title.innerText = record.fields["Title"];
    headings.innerText = record.fields["Headings"];
    overview.innerHTML = record.fields["Overview"];
    research.innerText = record.fields["Research"];
    overview1.innerHTML = record.fields["Overview1"];
    user.innerText = record.fields["User"];
    takeaways.innerHTML = record.fields["Takeaways"];
    plus.innerHTML = record.fields["Plus"];
    flow.innerText = record.fields["Flow"];
    design.innerText = record.fields["Design"];
    principles.innerHTML = record.fields["Principles"];
    style.innerText = record.fields["Style"];
    user1.innerHTML = record.fields["User1"];
    user2.innerHTML = record.fields["User2"];
    user3.innerHTML = record.fields["User3"];
    head.innerText = record.fields["Head"];
    info.innerHTML = record.fields["Info"];
    end.innerText = record.fields["End"];
    reflect.innerText = record.fields["Reflect"];
    app.innerText = record.fields["App"];



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

    gallery2.innerHTML = "";
    for (let i = 0; i < record.fields.Gallery2.length; i++) {
      let gallery2_image = document.createElement("img");
      gallery2_image.src = record.fields.Gallery2[i].url;
      gallery2.appendChild(gallery2_image);
    }

    feature.innerHTML = "";
    for (let i = 0; i < record.fields.Feature.length; i++) {
      let feature_image = document.createElement("img");
      feature_image.src = record.fields.Feature[i].url;
      feature.appendChild(feature_image);
    }

    lauryn.innerHTML = "";
    for (let i = 0; i < record.fields.Lauryn.length; i++) {
      let lauryn_image = document.createElement("img");
      lauryn_image.src = record.fields.Lauryn[i].url;
      lauryn.appendChild(lauryn_image);
    }

    noya.innerHTML = "";
    for (let i = 0; i < record.fields.Noya.length; i++) {
      let noya_image = document.createElement("img");
      noya_image.src = record.fields.Noya[i].url;
      noya.appendChild(noya_image);
    }

    trevor.innerHTML = "";
    for (let i = 0; i < record.fields.Trevor.length; i++) {
      let trevor_image = document.createElement("img");
      trevor_image.src = record.fields.Trevor[i].url;
      trevor.appendChild(trevor_image);
    }

    over.innerHTML = "";
    for (let i = 0; i < record.fields.Over.length; i++) {
      let over_image = document.createElement("img");
      over_image.src = record.fields.Over[i].url;
      over.appendChild(over_image);
    }

    guide.innerHTML = "";
    for (let i = 0; i < record.fields.Guide.length; i++) {
      let guide_image = document.createElement("img");
      guide_image.src = record.fields.Guide[i].url;
      guide.appendChild(guide_image);
    }



  });
}
