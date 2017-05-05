//
// Global constants for the app
//

export interface Globals {
  card: Size;
}

interface Size {
  width: number;
  height: number;
}

export const GLOBALS: Globals = {
  card: {
    width: 60,
    height: 98
  }
};
