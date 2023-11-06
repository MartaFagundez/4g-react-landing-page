import React from "react";
import Card from "./card";

export default function CardList() {
    return <div className="container d-flex flex-wrap justify-content-between">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
}