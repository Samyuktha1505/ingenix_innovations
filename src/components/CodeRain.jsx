const BinaryGrid = () => {
  const grid = Array(12).fill().map(() => 
    Array(12).fill().map(() => Math.round(Math.random()))
  );

  return (
    <div className="absolute inset-0 grid grid-cols-12 gap-1 opacity-10">
      {grid.map((row, i) => 
        row.map((cell, j) => (
          <motion.div
            key={`${i}-${j}`}
            className={`h-full ${cell ? 'bg-[#8B5CF6]' : 'bg-[#6E59A5]'}`}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))
      )}
    </div>
  );
};