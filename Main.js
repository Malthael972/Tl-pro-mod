const Player = new NativeClass("Terraria", "Player");

Player.UpdateEquips.hook((original, self, i) => {
    original(self, i);

    for (let slot = 3; slot <= 8; slot++) { // accessory slots
        const item = self.armor[slot];
        if (!item || item.netID === 0) continue;

        if (item.name === "Molten Quiver") {
            // Override vanilla 10% with custom 25%
            self.rangedDamage -= 0.10; // remove the default bonus
            self.rangedDamage += 0.25; // apply our bonus
        }
    }
});
