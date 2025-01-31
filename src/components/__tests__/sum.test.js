import { sum } from "../sum"; 
test("they return the sum of two numbers", () => {
   const ans = sum(5, 4);

   expect(ans).toBe(9); 
});