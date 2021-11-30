const rank1 = document.getElementById('rank-1');

function insertData(rank, name, voteCount) {
  const rankNum = document.getElementById(rank);
  rankNum.insertAdjacentHTML('beforeend', `
    <td> ${name} </td>
    <td> ${data.roy.rank} </td>
    <td> ${voteCount}</td>
  `);
}

for(let i = 0; i < siblings.length; i++) {
  insertData(`rank-${i+1}`, siblings[i].name, siblings[i].voteCount);
}
// insertData('rank-1', data.roy.name, data.roy.voteCount);
