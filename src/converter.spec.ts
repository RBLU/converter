import {convert} from './converter';

describe('converter should', () => {

  describe('convert lenghts from', () => {
    it('m to m', function () {
      expect(convert(5, 'm', 'm')).toBe(5)
    })

  });

  describe('convert weights', () => {

  });

});
