import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/nav";
import Son from "../components/son";
import Footer from '../components/footer';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Navbar />

				<h1 className={styles.title}>
					PAGE <a>2</a>
				</h1>

				<p className={styles.description}>
					Get started by editing{" "}
					<code className={styles.code}>pages/index.tsx</code>
				</p>

				<Son />
			</main>

			<Footer/>
		</div>
	);
};

export default Home;
