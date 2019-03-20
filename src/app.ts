// <!-- never going to return a value -->
const orderError = (error: string): never => {
    throw new Error(error);
};

orderError(`Something was wrong`);