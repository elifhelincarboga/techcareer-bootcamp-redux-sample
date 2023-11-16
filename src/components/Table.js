import React from 'react'
import "../assets/styles/table.css"

function Table(props) {
  return (
    <>
      <table className='tech-table'>
          <thead>
            <tr>
              {
                props.header.map((item, i) => {
                  return <th key={i}>{item}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
						{
							props.data.map((item, i) => {
								return <tr key={i}>
									{
										props.header.map((value, j) => {
											return value === 'action' ? <button key={j} onClick={() => props.actionClick(item.name)}>Add to Favorites</button> : <td key={j}>{item[value]}</td>
										})
									}
								</tr>
							})
						}
          </tbody>
      </table>
    </>
  )
}

export default Table