// src/hooks/useCreators.ts
import { useState, useCallback } from 'react';
import { Creator } from '../types/Creator';
import { creatorsData as initialData } from '../data/creatorsData';

export const useCreators = () => {
    const [creators, setCreators] = useState<Creator[]>(initialData);

    const removeCreator = useCallback((creatorId: number) => {
        setCreators(prev => prev.filter(creator => creator.id !== creatorId));
    }, []);

    const getCreatorCount = useCallback(() => {
        return creators.length;
    }, [creators.length]);

    return {
        creators,
        removeCreator,
        getCreatorCount,
    };
};

