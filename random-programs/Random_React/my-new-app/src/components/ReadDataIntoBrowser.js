import React from 'react';

function ReadDataIntoBrowser({data}) {
  let data1 = data;
  const peopleListing = data1.map((people) => {
    return (
      <div key={people.id}>
        <br />{people.last_name}, {people.first_name}
        <br />{people.fursona}
      </div>
    )
  });
  return peopleListing;
}

export default ReadDataIntoBrowser;
