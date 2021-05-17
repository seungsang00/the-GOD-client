import { ISearch } from 'interfaces/search';
import { useState } from 'react';

const Dropdown = () => {
  const [input, setInput] = useState<ISearch>({
    artist: undefined,
    location: {
      city: undefined,
      district: undefined,
    },
    date: {
      start: undefined,
      end: undefined,
    },
  });

  return (
    <div>
      <div>
        <input name="artist" value={input.artist} />
        <input name="artist" value={input.artist} />
        <input name="artist" value={input.artist} />
      </div>
      <label htmlFor="pet-select">Choose a pet:</label>

      <select name="pets" id="pet-select">
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
    </div>
  );
};

export default Dropdown;
