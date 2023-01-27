import React, { useState } from 'react';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import Tab from '@mui/material/Tab';
import { useFavorites } from '../hooks/favorites';
import { useLocalStorage } from '../hooks/localStorage';
import { useMarkets } from '../hooks/markets';
import Nav from '../components/Nav';
import MarketsList from '../components/MarketsList';
import Carousel from '../components/Carousel';

export default function MarketsPage() {
  const [tab, setTab] = useState(0);
  const [fiat, setFiat] = useLocalStorage({ key: 'fiat', defaultValue: 'usd' });
  const [markets, updateMarkets] = useMarkets({ fiat });
  const [favorites, toggleFavorite] = useFavorites();

  return (
    <>
      <Carousel value={tab} onChange={setTab} options={{ loop: false, speed: 20 }}>
        <MarketsList
          fiat={fiat}
          markets={markets}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
        <div>Favorites</div>
      </Carousel>
      <Nav value={tab} onChange={setTab}>
        <Tab label="Markets" value={0} icon={<ShowChartRoundedIcon />} />
        <Tab label="Favorites" value={1} icon={<FavoriteRoundedIcon />} />
      </Nav>
    </>
  );
};
