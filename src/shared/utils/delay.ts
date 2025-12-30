const defaultDelay = 800;

export const simulateDelay = (customDelay?: number): Promise<void> => {
  const delay = customDelay ? customDelay : defaultDelay;
  return new Promise((resolve) => setTimeout(resolve, delay)); 
};