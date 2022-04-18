import React, { Component } from 'react';
import ReviewList from './ReviewList';
import Modal from '../common/atoms/Modal';

const reviews = [
  {
    stars: '5',
    title: 'Parfait',
    description: 'Super look et sensation avec ce produit',
    reviewBy: 'Heidi C.',
    date: 'December, 2021'
  },
  {
    stars: '4.5',
    title: 'Tellement confortable!',
    description:
      'Très confortable et je les utilise tous les jours',
    reviewBy: 'Michel C.',
    date: 'Janvier, 2022'
  },
  {
    stars: '4',
    title: 'Confortable',
    description:
      'Je peux les décrire en un mot, confortable.',
    reviewBy: 'Alison M.',
    date: 'Aout, 2021'
  },
  {
    stars: '5',
    title: 'Super',
    description:
      'Super super super, J ai utilise ces produits depuis un an et ils sont toujours confortables et fonctionnent à merveille. Ils sont étonnants!',
    reviewBy: 'Jonas S.',
    date: 'December, 2019'
  }
];

export default class ClientReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  /**
   * Close the review modal
   */
  handleClose() {
    this.setState({ open: false });
  }

  /**
   * Show the review modal
   */
  handleOpen() {
    this.setState({ open: true });
  }

  render() {
    const { open } = this.state;

    return (
      <div id="reviews" className="custom-container pb-5">
        <Modal
          isOpen={open}
          onClose={this.handleClose}
          maxW="1000px"
        >
          <div className="d-flex justify-content-between align-items-center pb-3">
            <p className="font-size-subheader font-weight-medium">
              Tous les avis
            </p>
            <img
              tabIndex="0"
              src="/icon/cross.svg"
              className="w-24 cursor-pointer"
              onClick={this.handleClose}
              alt="Cross icon"
            />
          </div>
          <ReviewList reviews={reviews} />
        </Modal>
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="d-flex justify-content-between flex-column flex-sm-row align-items-sm-center mb-3">
              <p className="font-size-title font-weight-medium mb-2 mb-sm-0">
                4,7 étoiles sur 246 avis
              </p>
            </div>
            <ReviewList reviews={reviews}>
              <button
                type="button"
                onClick={this.handleOpen}
                className="text-center bg-transparent w-100 h-72 px-3 text-decoration-underline"
              >
                Voir tous les avis
              </button>
            </ReviewList>
          </div>
        </div>
      </div>
    );
  }
}
