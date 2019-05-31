module.exports = function main(input) {
  if (input.distance <= 2) {
    let result = Math.round(6 + input.parkTime * 0.25);
    console.log(result);
    return result;
  } else if (input.distance > 2 && input.distance <= 8) {
    result = Math.round(6 + (input.distance - 2) * 0.8 + input.parkTime * 0.25);
    console.log(result);
    return result;
  } else {
    result = Math.round(
      6 +
        6 * 0.8 +
        (input.distance - 8) * 0.8 * (1 + 0.5) +
        input.parkTime * 0.25
    );
    console.log(result);
    return result;
  }
};
