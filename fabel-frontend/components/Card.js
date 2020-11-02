// @flow
import * as React from 'react';

export default function Card(props) {
	return (
		<div className="bg-orange-400 shadow-lg rounded-md p-4">
      <div>{props.data.ObjectID}</div>
      <div>{props.data.ProductName}</div>
		</div>
	);
}
