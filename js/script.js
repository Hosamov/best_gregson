const rank1 = document.getElementById('rank-1');

/*
*@param rank String Name of rank for identifying correct row
*@param name String Name of sibling
*@param voteCount int Current vote count for sibling
*/
function insertData(rank, name, voteCount) {
  const rankNum = document.getElementById(rank);
  rankNum.insertAdjacentHTML('beforeend', `
    <td> ${name} </td>
    <td> <button class="${name}">VOTE!</button> </td>
    <td id="vote-count-${name.toLowerCase()}"> ${voteCount}</td>
  `);
}

/*
*@param sibling String Name of sibling, used to identify id of cell
*@param voteCount int number signifying number of votes for sibling
*/
function updateVoteCount(sibling, voteCount) {
  const voteCountSibling = document.getElementById(`vote-count-${sibling.toLowerCase()}`);
  voteCountSibling.innerHTML = voteCount;
}

// Loop through siblings array, insert pertinent data into table
for(let i = 0; i < siblings.length; i++) {
  insertData(`rank-${i+1}`, siblings[i].name, siblings[i].voteCount);
}

const button = document.getElementsByTagName('button');

for(let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', () => {
    // console.log(siblings[i].name);

    button[i].className === siblings[i].name ? (
      siblings[i].voteCount++,
      updateVoteCount(siblings[i].name, siblings[i].voteCount)
    ) : console.log("I can't find that sibling");
  })
}
