let groupToShow;
let contactBook = {
  owner: "VictoriaKh-T",
  contacts: [
    { "name": "Olena", "telephone": "070-1234567", "group": "work" },
    { "name": "Agneta", "telephone": "070-9876543", "group": "family" },
    { "name": "Klavdia", "telephone": "070-5555555", "group": "friends" },
    { "name": "Erik", "telephone": "070-1111111", "group": "friends" },
  ],
};

let allcontacts = contactBook.contacts;

function showGroup(groupToShow, allcontacts) {

  for (let contact of allcontacts) {
    if (contact.group === groupToShow) {
      console.log(`Name: ${contact.name}, Telephone: ${contact.telephone}!`);
    }
  }
}

groupToShow = "friends";
showGroup(groupToShow, allcontacts);