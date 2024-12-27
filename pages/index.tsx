import type { NextPage } from "next";
import { useState } from "react";
import { ContainerMachines } from "../components/ContainerMachines";
import { Filter } from "../components/Filter";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { PageLayout } from "../components/PageLayout";
import { useMachines } from "../hooks/useMachines";
import { useShortcuts } from "../hooks/useShortcuts";

const Home: NextPage = () => {
	return (
		<PageLayout title="Machines - Search engine">
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
		</PageLayout>
	);
};

export default Home;
