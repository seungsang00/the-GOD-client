export interface ISearch {
  artist?: string;
  location: SearchLocation;
  date: SearchDate;
}

type SearchLocation = {
  city?: string;
  district?: string;
};

type SearchDate = {
  start?: string;
  end?: string;
};
