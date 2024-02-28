function MemoryGrid({ gridSprites }) {
    return (
        <>
            {gridSprites.map((pokemon) => (
                <div key={pokemon.index}>
                    <img src={pokemon.sprite} alt={`pkmn#${pokemon.index}`} />
                </div>
            ))}
        </>
    )
}

export default MemoryGrid;