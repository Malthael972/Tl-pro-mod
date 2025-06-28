const Player = new NativeClass("Terraria", "Player");

Player.Update.hook((original, self, i) => {
    original(self, i);

    const vanitySlots = [self.armor[10], self.armor[11], self.armor[12]];

    for (const item of vanitySlots) {
        if (!item || item.type === 0) continue;

        // Apply defense manually
        self.statDefense += item.defense || 0;

        // Try to apply the armor's stat bonuses
        if (typeof item.UpdateEquip === "function") {
            item.UpdateEquip(self);
        }
    }
});
