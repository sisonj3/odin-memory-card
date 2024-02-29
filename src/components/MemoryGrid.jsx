function MemoryGrid({ gridSprites, scoringFunction }) {
    return (
        <>
            {gridSprites.map((pokemon) => (
                <div key={pokemon.index}>
                    <img onClick={scoringFunction} src={pokemon.sprite} alt={pokemon.index} />
                </div>
            ))}
        </>
    )
}

export default MemoryGrid;