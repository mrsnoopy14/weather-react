import React from 'react'

export default function SearchBar({ value, onChange, onSubmit, disabled }) {
  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
    >
      <input
        className="search__input"
        type="text"
        placeholder="Search city (e.g., London)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        spellCheck={false}
        disabled={disabled}
      />
      <button className="search__button" type="submit" disabled={disabled}>
        Search
      </button>
    </form>
  )
}
