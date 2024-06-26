import React from "react";
import { Accordion } from "react-bootstrap";
import AccordionItem from "./AccordionItem";

export default function AccordionList({ id="", list }) {
	return (
		<Accordion
			alwaysOpen
			id={id}>
			{list.map((e, i) => (
				<AccordionItem
					eventKey={i}
					key={`${id}-${i}`}
					data={e}
				/>
			))}
		</Accordion>
	);
}
