function calculateRate(itemType, itemWeight) {
    let postageRate = 0;
    itemWeight = Number(itemWeight);

    console.log(typeof(itemWeight));

    if (itemType[0] === 'Letters (Stamped)') {
        if (itemWeight < 1)
            postageRate = .50;
        else if (itemWeight < 2)
            postageRate = .71;
        else if (itemWeight < 3)
            postageRate = .92;
        else if (itemWeight < 3.5)
            postageRate = 1.13;
        else
            postageRate = -1;
    }
    if (itemType[0] === 'Letters (Metered)') {
        if (itemWeight < 1)
            postageRate = .47;
        else if (itemWeight < 2)
            postageRate = .68;
        else if (itemWeight < 3)
            postageRate = .89;
        else if (itemWeight < 3.5)
            postageRate = 1.1;
        else
            postageRate = -1;
    }
    if (itemType[0] === 'Large Envelopes (Flats)') {
        if (itemWeight < 1)
            postageRate = .799;
        else if (itemWeight < 2)
            postageRate = 1.009;
        else if (itemWeight < 3)
            postageRate = 1.219;
        else if (itemWeight < 4)
            postageRate = 1.429;
        else if (itemWeight < 5)
            postageRate = 1.639;
        else if (itemWeight < 6)
            postageRate = 1.849;
        else if (itemWeight < 7)
            postageRate = 2.059;
        else if (itemWeight < 8)
            postageRate = 2.269;
        else if (itemWeight < 9)
            postageRate = 2.479;
        else if (itemWeight < 10)
            postageRate = 2.689;
        else if (itemWeight < 11)
            postageRate = 2.899;
        else if (itemWeight < 12)
            postageRate = 3.109;
        else if (itemWeight < 13)
            postageRate = 3.319;
        else
            itemWeight = -1;
    }
    if (itemType[0] === 'First-Class Package Service-Retail(Stamped)') {
        if (itemWeight < 1)
            postageRate = 1.15;
        else if (itemWeight < 2)
            postageRate = 1.15;
        else if (itemWeight < 3)
            postageRate = 1.61;
        else if (itemWeight < 3.5)
            postageRate = 2.08;
        else
            postageRate = -1;
    }
    return postageRate;
}



