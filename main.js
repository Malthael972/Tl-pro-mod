const Player = new NativeClass("Terraria", "Player");
const Item = new NativeClass("Terraria", "Item");

Player.Update.hook((original, self, i) => {
    original(self, i);

    // Vanity Armor Slots
    const head = self.armor[10]; // Vanity Head
    const body = self.armor[11]; // Vanity Body
    const legs = self.armor[12]; // Vanity Legs

    // Apply defense from vanity slots
    if (head.defense) self.statDefense += head.defense;
    if (body.defense) self.statDefense += body.defense;
    if (legs.defense) self.statDefense += legs.defense;

    // Apply individual item stat boosts (very simplified)
    // Note: You'd need to map specific items for correct bonuses
    applyStatBonuses(self, head);
    applyStatBonuses(self, body);
    applyStatBonuses(self, legs);

    // Check for armor set bonus
    if (head.type === body.type - 1 && head.type === legs.type - 2) {
        self.setBonus = "Extra set bonus from vanity armor!";
        self.statLifeMax2 += 20;  // Example: bonus max health
    }
});

function applyStatBonuses(player, item) {
    if (!item || item.netID <= 0) return;

    // Basic examples – real mod should include specific item checks
    switch (item.type) {
        case 59: // Example: Silver Helmet
            player.statDefense += 2;
            break;
        case 60: // Example: Silver Chainmail
            player.meleeSpeed += 0.1;
            break;
        case 61: // Example: Silver Greaves
            player.moveSpeed += 0.1;
            break;
        default:
            break;
    }
}
