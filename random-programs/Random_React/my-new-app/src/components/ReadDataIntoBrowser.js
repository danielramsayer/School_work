import React from 'react';

function ReadDataIntoBrowser({data}) {
  let data = {data}
  const peopleListing = data.map((people) => {
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
