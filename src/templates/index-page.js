import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import logo from '../img/scenario/homepage/logo.png';
import ScenarioSlider from '../components/Scenario/ScenarioSlider';
import { v4 } from 'uuid';
import { AiFillCloseCircle } from 'react-icons/ai';
import '../css/index.css';
import '../css/newdashboard.css';
import '../css/scenario.css';
import '../css/form.css';
import '../css/home.css';
import '../css/service.css';
import '../css/tabs.css';
import Modal from 'react-modal';

export const IndexPageTemplate = ({ scenarios, slider }) => {
	const [showSelectScenario, setShowSelectScenario] = useState(false);
	const [showUseCase, setShowUseCase] = useState(false);
	const [useCase, setUseCase] = useState(null);
	const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);
	const [modalIsOpen, setIsOpen] = useState(false);
	const [searchKey, setSearchKey] = useState("")

	function handleFillterModules(e) {
		const { value } = e.target
		if (value !== "") {
			for (let i = 0; i < selectedScenario.subItems.length; i++) {
				if (selectedScenario.subItems[i].name.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
					selectedScenario.subItems[i]["isHidden"] = false
				}
				else {
					selectedScenario.subItems[i]["isHidden"] = true
				}
			}
		}
		else {
			for (let i = 0; i < selectedScenario.subItems.length; i++) {
				selectedScenario.subItems[i]["isHidden"] = false

			}
		}
		setSelectedScenario({ ...selectedScenario });
	}

	function onClickUseCase(uc) {
		if (uc.useCaseSlider) {
			setUseCase(uc);
			setShowUseCase(true);
			document.body.style.overflow = "hidden";
		}
	}

	function onClickUseCaseClose() {
		setShowUseCase(false);
		document.body.style.overflow = "auto";
	}

	function onClickSubSelectScenario(scenario) {
		setSelectedScenario(scenario);
	}

	function selectScenario() {
		return (
			<div className="select-scenario-left">
				{/* <button className="close-btn" onClick={onClickSelectScenarioClose}>
					<AiFillCloseCircle />
				</button> */}
				<div className="scenario-container">
					{scenarios && (
						<ul style={{ background: 'white' }}>
							{scenarios.map((scenario) => (
								<li key={v4()}>
									<div
										className={`item ${selectedScenario.name === scenario.name ? 'active' : ''}`}
										onClick={() => onClickSubSelectScenario(scenario)}
									>
										<div className="image">
											<img
												src={scenario.img}
												alt={scenario.name}
												title={scenario.name}
												width="80"
												height="80"
												style={{ borderRadius: '50%' }}
											/>
										</div>
										<div className="name">{scenario.name}</div>
									</div>
								</li>
							))}
						</ul>
					)}

					{selectedScenario && (
						<div className="dashboard-sub-scenario-container">
							<div className="sub-scenario-heading">
								<h2>{selectedScenario.name}</h2>
								<button onClick={openModal} type="button" class="btn btn-light modules-btn">Modules</button>
							</div>
							{/* <Carousel className="slider-section"
								wrapAround={true}
								autoplayInterval={1000}
								autoplay={false}
								slidesToShow={3}
								withoutControls={true}
								renderCenterLeftControls={({ previousSlide }) => (
									<button onClick={previousSlide}>Previous</button>
								)}
								renderCenterRightControls={({ nextSlide }) => (
									<button onClick={nextSlide}>Next</button>
								)}
							> */}
							<div className="slider-section">
								<div className='row'>
									{selectedScenario.subItems.map((item) => {
										if (!item.isChecked && !item.isHidden) {
											return (
												<div className='col-md-4 col-sm-12' key={v4()}>
													<div
														className="item"
													>
														<div className="name">{item.name}</div>
														<div className="image" onClick={() => {
															onClickUseCase(item);
														}}>
															<img
																src={item.img}
																alt={item.name}
																title={item.name}
															/>
														</div>
														<div className="product-links">
															<div className="name"><a target="_blank" href={item.link}>Prototype</a></div>
															<div className="name"> <a href='#' style={{ cursor: 'pointer' }} onClick={() => {
																onClickUseCase(item);
															}}>Screenshots</a></div>
														</div>
													</div>
												</div>
											)
										}
									}
									)}
								</div>
							</div>
							{/* className="slider-section" */}

							{/* <ul>
								{selectedScenario.subItems.map((item) => {
									if (!item.isChecked) {
										return (
											<li key={v4()}>
												<div
													className="item"
													onClick={() => {
														onClickUseCase(item);
													}}
												>
													<div className="image">
														<img
															src={item.img}
															alt={item.name}
															title={item.name}
														/>
													</div>
													<div className="name">{item.name}</div>
												</div>
											</li>
										)
									}
								}
								)}
							</ul> */}
						</div>
					)}
				</div>
			</div>
		);
	}

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	function setSelectedUser(event, index, module) {
		const { checked, name } = event.target;
		if (selectedScenario.subItems && selectedScenario.subItems.length > 0) {
			for (let i = 0; i < selectedScenario.subItems.length; i++) {
				if (i === index || selectedScenario.subItems[i].module === module) {
					selectedScenario.subItems[i].isChecked = !checked
				}
			}
			setSelectedScenario({ ...selectedScenario, selectedScenario });
		}
	}

	function applyFilterOfUser() {
		setSelectedScenario({ ...selectedScenario, selectedScenario });
		setIsOpen(false);
	}

	function clearAllFilter() {
		if (selectedScenario.subItems && selectedScenario.subItems.length > 0) {
			for (let i = 0; i < selectedScenario.subItems.length; i++) {
				selectedScenario.subItems[i].isChecked = true;
			}
		}
		setSelectedScenario({ ...selectedScenario, selectedScenario });
	}
	function handleCheckList(subItems) {
		let modules = []
		let retData = [];
		for (let i = 0; i < subItems.length; i++) {
			let data = subItems[i]
			if (modules.indexOf(data.module) === -1) {
				retData.push(
					<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
						<div className="form-check module-chack-box">
							<input className="form-check-input" checked={!data.isChecked} onChange={(e) => setSelectedUser(e, i, data.module)} type="checkbox" id={`${i}_flexCheckDefault`} />
							<label key={i} className="form-check-label" htmlFor={`${i}_flexCheckDefault`}>
								<div className="module-user-profile">
									<img src={data.logo} alt={data.logo} />
								</div>
								{data.module}
							</label>
						</div>
					</div>
				)
			}
			modules.push(data.module)
		}
		return retData
	}
	return (
		<>
			<section id="scenario-bg">
				<div
					className={`new-dashboard-slider-container ${showSelectScenario === true
						? 'select-scenario'
						: ''} ${showUseCase === true ? 'select-usecase' : ''}`}
				>
					<div className="homePage-grid">
						<div className="header">
							<div className="logo">
								<img src={logo} alt="" />
							</div>
						</div>
						<div className='search-box'>
							<div className="search-bar">
								<input
									type='search'
									name=''
									id='search-home'
									placeholder='Search Here...'
									onChange={(e) => handleFillterModules(e)}
								/>
								<i class="far fa-search"></i>
							</div>
						</div>
						{selectScenario()}
					</div>
				</div>
			</section>
			{showUseCase &&
				<div className={`scenario-slider-container dashboard-slider-container  ${showUseCase === true ? 'select-usecase' : ''}`}>
					<button
						className="close-btn"
						onClick={() => {
							onClickUseCaseClose(useCase);
						}}
					>
						<AiFillCloseCircle />
					</button>
					<ScenarioSlider
						slider={useCase.useCaseSlider}
						showMoreDetailsButton={false}
						onClickUseCaseClose={onClickUseCaseClose}
					/>
				</div>
			}
			<Modal isOpen={modalIsOpen}>
				<div className="modal-main-content">
					<div className="modal-header">
						<h3>Select Modules</h3>
						<span onClick={closeModal}><i class="fas fa-times"></i></span>
					</div>
					<div className="modal-body-content">
						<div className="row">
							{selectedScenario?.subItems?.length > 0 &&
								handleCheckList(selectedScenario.subItems)
							}
							{/* {selectedScenario.subItems.map((item, index) => (
								<div className="col-md-4">
									<div className="form-check">
										<input className="form-check-input" checked={!item.isChecked} onChange={(e) => setSelectedUser(e, index, item.module)} type="checkbox" id="flexCheckDefault" />
										<label className="form-check-label" htmlFor="flexCheckDefault">
											{item.module}
										</label>
									</div>
								</div>
							))} */}
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" class="clear-btn" onClick={clearAllFilter}>Clear All</button>
						<button type="button" class="btn btn-dark submit-btn" onClick={applyFilterOfUser}>Submit</button>
					</div>
				</div>
			</Modal>
		</>
	);
};

IndexPageTemplate.propTypes = {
	scenarios: PropTypes.array,
	slider: PropTypes.array
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;
	return <IndexPageTemplate scenarios={frontmatter.scenarios} slider={frontmatter.slider} />;
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default IndexPage;

export const IndexPageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				scenarios {
					img
					name
					subItems {
						img
						name
						link
						screenshots
						module
						logo
						useCaseSlider {
							img
							name
							text
						}
					}
				}
				slider {
					img
					name
					text
					moreDetails {
						moreDetailsName
						moreDetailsText
						moreDetailsImg {
							img
						}
					}
				}
			}
		}
	}
`;
