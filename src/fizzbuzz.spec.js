import {generarFizzBuzzPara,generarSecuenciaFizzBuzz} from "./fizzbuzz.js"

describe("obetenerFizzBuzz", () => {
    it("deberia devolver nada ", () => {
      expect(generarFizzBuzzPara(3)).toEqual("Fizz");
    });
    it("deberia devolver nada ", () => {
        expect(generarFizzBuzzPara(5)).toEqual("Buzz");
      });

      it("deberia devolver nada ", () => {
        expect(generarFizzBuzzPara(15)).toEqual("FizzBuzz");
      });
      
      
  });
  describe("Fizz buzz de secuencia", () => {
    it("deberia devolver nada ", () => {
      expect(generarSecuenciaFizzBuzz(3)).toEqual("1, 2, Fizz");
      expect(generarSecuenciaFizzBuzz(5)).toEqual("1, 2, Fizz, 4, Buzz");
    })
  });



  